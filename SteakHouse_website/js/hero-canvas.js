/**
 * STEAKHOUSE - Hero Canvas Frame Scroll Controller
 * Seamless scrubbing through 192 HD frames with lerp interpolation & stage sync
 */

(function () {
  "use strict";

  const TOTAL_FRAMES = 192;
  const FRAME_PREFIX = "frames/frame_";
  const FRAME_EXT = ".jpg";

  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const track = document.querySelector(".hero-scroll-track");
  const preloaderPill = document.querySelector(".hero-preloader-pill");
  const preloaderBar = document.querySelector(".preloader-bar");
  const stages = document.querySelectorAll(".hero-stage");

  const images = [];
  let loadedCount = 0;
  let targetProgress = 0;
  let currentProgress = 0;
  let lastDrawnIndex = -1;
  let isReady = false;

  // Format frame number to 3 digits (e.g. 0 -> "000")
  function formatIndex(i) {
    return String(i).padStart(3, "0");
  }

  // Preload frames
  function preloadImages() {
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameSrc = `${FRAME_PREFIX}${formatIndex(i)}${FRAME_EXT}`;
      img.src = frameSrc;

      img.onload = () => {
        loadedCount++;
        if (preloaderBar) {
          const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
          preloaderBar.style.width = `${pct}%`;
        }

        // Draw initial frame as soon as frame 0 loads
        if (i === 0 && !isReady) {
          drawFrame(0);
        }

        if (loadedCount >= Math.min(25, TOTAL_FRAMES) && !isReady) {
          isReady = true;
          startRenderLoop();
        }

        if (loadedCount === TOTAL_FRAMES) {
          if (preloaderPill) {
            setTimeout(() => preloaderPill.classList.add("loaded"), 400);
          }
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= 20 && !isReady) {
          isReady = true;
          startRenderLoop();
        }
      };

      images.push(img);
    }
  }

  // High-DPI Canvas Resizing with Aspect-Ratio Containment ("cover")
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale
    ctx.scale(dpr, dpr);

    if (lastDrawnIndex >= 0) {
      drawFrame(lastDrawnIndex);
    }
  }

  // Draw frame with center cover crop
  function drawFrame(index) {
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Calculate aspect ratio cover dimensions
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) / 2;
    const ny = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, nx, ny, nw, nh);
    lastDrawnIndex = index;
  }

  // Calculate scroll position relative to track
  function updateScrollProgress() {
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const scrollableDistance = track.offsetHeight - window.innerHeight;

    if (scrollableDistance <= 0) {
      targetProgress = 0;
      return;
    }

    const scrollY = -rect.top;
    targetProgress = Math.max(0, Math.min(1, scrollY / scrollableDistance));
  }

  // Synchronize Text Stage Overlays (3 Stages Total)
  function syncStages(progress) {
    // Stage intervals with comfortable reading duration
    // Stage 0: 0.00 - 0.28 (Intro)
    // Stage 1: 0.35 - 0.65 (Heritage Prime & Flame)
    // Stage 2: 0.72 - 1.00 (Plated to Perfection)

    let activeStageIdx = -1;
    if (progress <= 0.28) {
      activeStageIdx = 0;
    } else if (progress >= 0.35 && progress <= 0.65) {
      activeStageIdx = 1;
    } else if (progress >= 0.72) {
      activeStageIdx = 2;
    }

    stages.forEach((stage, idx) => {
      if (idx === activeStageIdx) {
        stage.classList.add("active");
      } else {
        stage.classList.remove("active");
      }
    });
  }

  // Animation Loop with Lerp Smoothing
  function startRenderLoop() {
    function tick() {
      // Lerp smoothing factor for smooth gliding scroll feel
      const lerpFactor = 0.085;
      currentProgress += (targetProgress - currentProgress) * lerpFactor;

      // When difference is tiny, snap to target
      if (Math.abs(targetProgress - currentProgress) < 0.0001) {
        currentProgress = targetProgress;
      }

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgress * (TOTAL_FRAMES - 1)))
      );

      if (frameIndex !== lastDrawnIndex) {
        drawFrame(frameIndex);
      }

      syncStages(currentProgress);
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // Event Listeners
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", () => {
    resizeCanvas();
    updateScrollProgress();
  });

  // Init
  window.addEventListener("DOMContentLoaded", () => {
    resizeCanvas();
    preloadImages();
    updateScrollProgress();
  });
})();
