from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
import os
from typing import List

app = FastAPI()

# Add security middleware
app.add_middleware(GZipMiddleware, minimum_size=1000)


# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Serve the built Vite files
app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

# Add security headers middleware
@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    
    # Security headers
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    
    # Cache control for static assets
    if request.url.path.startswith("/assets/"):
        response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
    else:
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    
    return response

# Serve index.html for all other routes (SPA fallback)
@app.get("/{full_path:path}")
def serve_frontend(full_path: str):
    index_path = os.path.join("dist", "index.html")
    
    # Security check - prevent directory traversal
    if not os.path.abspath(index_path).startswith(os.path.abspath("dist")):
        return FileResponse("dist/index.html")
    
    return FileResponse(index_path)
