let resizeTimeout;

function resizeUnityCanvas() {
  const canvas = document.getElementById("unity-canvas");
  if (!canvas) return;

  // Get Unity's intrinsic resolution from the <canvas> element
  const gameWidth = 960;
  const gameHeight = 600;

  // Visible viewport size
  const vw = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  const scaleFactor = Math.min(vw / gameWidth, vh / gameHeight);

  canvas.style.setProperty("width", gameWidth * scaleFactor + "px", "important");
  canvas.style.setProperty("height", gameHeight * scaleFactor + "px", "important");

  canvas.style.setProperty("object-fit", "contain", "important");
}

function debouncedResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeUnityCanvas, 200);
}

window.addEventListener("load", resizeUnityCanvas);
window.addEventListener("resize", debouncedResize);
