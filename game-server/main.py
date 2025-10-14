#!/usr/bin/env python3
"""
Unity Game Host - Simple game serving service
"""

import asyncio
import base64
import json
from fastapi import FastAPI, Response, Request, HTTPException
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import mimetypes
import urllib.request
import urllib.error
import uvicorn
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(title="Unity Game Host", version="1.0.0")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directory paths
CURRENT_DIR = Path(__file__).parent
GAMES_ROOT = CURRENT_DIR / "Games"
CONFIGS_ROOT = CURRENT_DIR / "Configs"
FRONTEND_ROOT = CURRENT_DIR / "FrontEnd"

# Mount static files for frontend
app.mount("/frontend", StaticFiles(directory=str(FRONTEND_ROOT)), name="frontend")


def get_games_from_filesystem():
    """Scan the Games directory and return valid games with their icons"""
    games = []
    if not GAMES_ROOT.exists():
        return games

    for game_dir in GAMES_ROOT.iterdir():
        if not game_dir.is_dir() or game_dir.name.startswith("."):
            continue

        # Check if it's a valid Unity game (has index.html)
        index_path = game_dir / "index.html"
        if index_path.exists():
            # Look for game icon in Build folder
            build_dir = game_dir / "Build"
            icon_url = None

            if build_dir.exists():
                for ext in [".jpg", ".jpeg", ".png", ".webp"]:
                    icon_path = build_dir / f"{game_dir.name}{ext}"
                    if icon_path.exists():
                        icon_url = f"/games/{game_dir.name}/Build/{game_dir.name}{ext}"
                        break

            games.append(
                {
                    "name": game_dir.name,
                    "url": f"/games/{game_dir.name}/index.html",
                    "icon": icon_url,
                }
            )

    return games


@app.get("/")
async def root():
    """Root endpoint - serve the game listing page"""
    frontend_index = FRONTEND_ROOT / "index.html"
    if frontend_index.exists():
        return FileResponse(frontend_index)
    else:
        raise HTTPException(status_code=500, detail="FrontEnd not found")


@app.get("/api/games")
async def list_games():
    """API endpoint to list available games"""
    games = get_games_from_filesystem()
    return {"games": games}


# @app.get("/favicon.ico")
# async def favicon():
#     company_logo_path = FRONTEND_ROOT / "shs_logo_small.png"
#     if company_logo_path.exists():
#         return FileResponse(company_logo_path, media_type="image/x-icon")
#     else:
#         return Response(status_code=204)


@app.get("/games/{game_name}/index.html")
@app.head("/games/{game_name}/index.html")
async def serve_game_index(game_name: str, request: Request):
    """Serve the main game HTML file with resizing functionality"""
    game_path = GAMES_ROOT / game_name
    index_path = game_path / "index.html"

    if not game_path.exists() or not index_path.exists():
        raise HTTPException(status_code=404, detail="Game not found")

    if request.method == "HEAD":
        return Response(status_code=200, headers={"Content-Type": "text/html; charset=utf-8"})

    # Read the original HTML content
    try:
        with open(index_path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        logger.error(f"Failed to read game index.html for {game_name}: {e}")
        raise HTTPException(status_code=500, detail="Failed to load game")

    # Inject resizing functionality into the game
    styling_css = f"""
    <link rel="stylesheet" href="/frontend/styles.css">
    <script src="/frontend/unity-resizer.js"></script>
    """

    # Insert the script before closing </head> tag
    content = content.replace("</head>", styling_css + "</head>")

    return HTMLResponse(content=content)


# Base64 for a 1x1 transparent PNG
BLANK_PNG = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAA" "AAC0lEQVR42mP8/w8AAgMBAQEAOw==")


@app.get("/games/{game_name}/{file_path:path}")
async def serve_game_file(game_name: str, file_path: str):
    """Serve game assets with proper MIME types"""

    # Intercept Unity logo requests and serve a blank logo instead
    if file_path.endswith("unity-logo-dark.png") or file_path.endswith("unity-logo-light.png"):
        return Response(content=BLANK_PNG, media_type="image/png")

    if file_path.endswith("favicon.ico"):
        company_logo_path = FRONTEND_ROOT / "shs_logo_small.png"
        return FileResponse(company_logo_path, media_type="image/png")

    file = (GAMES_ROOT / game_name / file_path).resolve()

    if not str(file).startswith(str(GAMES_ROOT.resolve())) or not file.exists():
        return Response("File not found", status_code=404)

    headers = {}
    content_type, _ = mimetypes.guess_type(file.name)

    # Explicit MIME type handling
    if file.suffix.lower() == ".png":
        content_type = "image/png"
    elif file.suffix.lower() in [".jpg", ".jpeg"]:
        content_type = "image/jpeg"
    elif file.suffix.lower() == ".css":
        content_type = "text/css"
    elif file.suffix.lower() == ".js":
        content_type = "application/javascript"
    elif file.suffix.lower() == ".wasm":
        content_type = "application/wasm"

    # Handle compressed files
    if file.suffix == ".gz":
        headers["Content-Encoding"] = "gzip"
        original_type, _ = mimetypes.guess_type(file.stem)
        if original_type:
            content_type = original_type
    elif file.suffix == ".br":
        headers["Content-Encoding"] = "br"
        original_type, _ = mimetypes.guess_type(file.stem)
        if original_type:
            content_type = original_type

    if content_type:
        headers["Content-Type"] = content_type

    # Cache headers for static assets
    if file_path.startswith("TemplateData/") or file_path.startswith("Build/"):
        headers["Cache-Control"] = "public, max-age=31536000"

    return FileResponse(file, headers=headers)


@app.get("/api/getConfig/")
async def get_config(game: str):
    """Get configuration for a specific game"""
    try:
        safe_game_name = "".join(c for c in game if c.isalnum() or c in "-_")
        if not safe_game_name:
            raise HTTPException(status_code=400, detail="Invalid game name")

        config_path = CONFIGS_ROOT / f"{safe_game_name}-SampleConfig.json"
        if not config_path.exists():
            config_path = CONFIGS_ROOT / f"{safe_game_name}.json"

        if not config_path.exists():
            raise HTTPException(status_code=404, detail=f"Configuration not found for game: {game}")

        with open(config_path, "r", encoding="utf-8") as f:
            config_data = json.load(f)

        return config_data
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid configuration file format")
    except Exception as e:
        logger.error(f"Error retrieving config for game {game}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")


# Image proxy endpoint for Unity WebGL
@app.get("/get-proxy-image")
async def get_proxy_image(url: str):
    """Proxy endpoint for Unity WebGL to bypass CORS restrictions"""
    try:
        # Validate URL
        if not url.startswith(("http://", "https://")):
            return Response("Invalid URL", status_code=400)

        # Fetch the image
        loop = asyncio.get_event_loop()

        def fetch_image():
            req = urllib.request.Request(url)
            req.add_header("User-Agent", "Mozilla/5.0 (compatible; GamePlatform/1.0)")
            with urllib.request.urlopen(req, timeout=10) as response:
                return response.read(), response.headers.get("Content-Type", "image/jpeg")

        image_data, content_type = await loop.run_in_executor(None, fetch_image)

        # Return with CORS headers
        headers = {
            "Content-Type": content_type,
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=3600",
        }

        return Response(content=image_data, media_type=content_type, headers=headers)

    except urllib.error.URLError as e:
        return Response(f"Failed to fetch image: {str(e)}", status_code=502)
    except Exception as e:
        return Response(f"Server error: {str(e)}", status_code=500)


if __name__ == "__main__":
    logger.info("Starting Unity Game Host...")
    uvicorn.run("main:app", host="0.0.0.0", port=3011, reload=True, log_level="info")
