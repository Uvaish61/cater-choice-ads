"use client";

import { useEffect, useRef } from "react";

// Trimmed, background-only version of a "cinematic highway" scene:
// sky gradient, two parallax hill layers, drifting clouds, a scrolling road,
// and a courier truck with a bouncing suspension and spinning wheels.
// Deliberately skips the full spec's mountains/birds/flowers/signage — this
// renders faded behind foreground content, so extra detail wouldn't read anyway.
export function HighwayAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // ---- Reused config (no per-frame allocation) ----
    const clouds = [
      { x: 0.08, y: 0.16, scale: 1.0, speed: 5 },
      { x: 0.4, y: 0.08, scale: 0.7, speed: 3.5 },
      { x: 0.72, y: 0.22, scale: 1.2, speed: 6 },
    ];
    const hillFarSpeed = 7;
    const hillNearSpeed = 16;
    const roadLineSpeed = 150;

    function drawSky() {
      const g = ctx!.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "#67B7FF");
      g.addColorStop(0.55, "#A6D8FF");
      g.addColorStop(1, "#FFFFFF");
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, width, height);
    }

    function drawCloud(cx: number, cy: number, scale: number) {
      ctx!.fillStyle = "rgba(255,255,255,0.85)";
      ctx!.beginPath();
      ctx!.ellipse(cx, cy, 30 * scale, 14 * scale, 0, 0, Math.PI * 2);
      ctx!.ellipse(cx + 22 * scale, cy - 6 * scale, 20 * scale, 12 * scale, 0, 0, Math.PI * 2);
      ctx!.ellipse(cx - 22 * scale, cy - 4 * scale, 18 * scale, 11 * scale, 0, 0, Math.PI * 2);
      ctx!.fill();
    }

    function drawHillLayer(baseY: number, amp: number, color: string, offset: number) {
      const step = width / 4;
      ctx!.fillStyle = color;
      ctx!.beginPath();
      ctx!.moveTo(-step, height);
      ctx!.lineTo(-step, baseY);
      for (let i = -1; i <= 5; i++) {
        const x = i * step - (offset % step);
        ctx!.quadraticCurveTo(x + step / 2, baseY - amp, x + step, baseY);
      }
      ctx!.lineTo(width + step, height);
      ctx!.closePath();
      ctx!.fill();
    }

    function drawRoad(roadY: number, roadH: number, offset: number) {
      ctx!.fillStyle = "#4b5563";
      ctx!.fillRect(0, roadY, width, roadH);
      ctx!.fillStyle = "rgba(255,255,255,0.55)";
      ctx!.fillRect(0, roadY + 3, width, 2);

      const dashW = 36;
      const gapW = 26;
      const cycle = dashW + gapW;
      ctx!.fillStyle = "rgba(255,255,255,0.85)";
      let x = -(offset % cycle);
      while (x < width) {
        ctx!.fillRect(x, roadY + roadH / 2 - 2, dashW, 4);
        x += cycle;
      }
    }

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      ctx!.beginPath();
      ctx!.moveTo(x + r, y);
      ctx!.arcTo(x + w, y, x + w, y + h, r);
      ctx!.arcTo(x + w, y + h, x, y + h, r);
      ctx!.arcTo(x, y + h, x, y, r);
      ctx!.arcTo(x, y, x + w, y, r);
      ctx!.closePath();
    }

    function drawWheel(cx: number, cy: number, r: number, angle: number) {
      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.fillStyle = "#1f2937";
      ctx!.beginPath();
      ctx!.arc(0, 0, r, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = "#9ca3af";
      ctx!.beginPath();
      ctx!.arc(0, 0, r * 0.45, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.strokeStyle = "#374151";
      ctx!.lineWidth = 2;
      ctx!.rotate(angle);
      for (let i = 0; i < 5; i++) {
        ctx!.beginPath();
        ctx!.moveTo(0, 0);
        ctx!.lineTo(r * 0.4, 0);
        ctx!.stroke();
        ctx!.rotate((Math.PI * 2) / 5);
      }
      ctx!.restore();
    }

    function drawTruck(cx: number, groundY: number, bounce: number, wheelAngle: number) {
      const truckW = Math.min(width * 0.34, 420);
      const scale = truckW / 420;
      const x0 = cx - truckW / 2;
      const y0 = groundY - 120 * scale + bounce;

      // contact shadow
      ctx!.fillStyle = "rgba(0,0,0,0.15)";
      ctx!.beginPath();
      ctx!.ellipse(cx, groundY + 6, truckW * 0.42, 8 * scale, 0, 0, Math.PI * 2);
      ctx!.fill();

      // trailer body
      ctx!.fillStyle = "#f4f6f8";
      roundRect(x0, y0, truckW * 0.62, 100 * scale, 12 * scale);
      ctx!.fill();
      ctx!.strokeStyle = "#d8dee3";
      ctx!.lineWidth = 1.5;
      ctx!.stroke();

      // trailer window showing parcels
      const winX = x0 + 14 * scale;
      const winY = y0 + 14 * scale;
      const winW = truckW * 0.62 - 28 * scale;
      const winH = 46 * scale;
      ctx!.fillStyle = "#dcedff";
      roundRect(winX, winY, winW, winH, 6 * scale);
      ctx!.fill();

      const boxColors = ["#d9a066", "#c98a4b", "#e0b083"];
      let bx = winX + 6 * scale;
      let i = 0;
      while (bx < winX + winW - 20 * scale) {
        const bw = 22 * scale;
        const bh = 18 * scale + (i % 2) * 8 * scale;
        ctx!.fillStyle = boxColors[i % boxColors.length];
        ctx!.fillRect(bx, winY + winH - bh - 2, bw, bh);
        ctx!.strokeStyle = "rgba(0,0,0,0.15)";
        ctx!.strokeRect(bx, winY + winH - bh - 2, bw, bh);
        bx += bw + 4 * scale;
        i++;
      }

      // logo
      ctx!.font = `bold ${16 * scale}px system-ui, sans-serif`;
      const logoY = y0 + 82 * scale;
      const catersText = "Caters ";
      ctx!.fillStyle = "#E53935";
      ctx!.fillText(catersText, x0 + 14 * scale, logoY);
      const catersWidth = ctx!.measureText(catersText).width;
      ctx!.fillStyle = "#2E7D32";
      ctx!.fillText("Choice", x0 + 14 * scale + catersWidth, logoY);

      // cab
      const cabW = truckW * 0.28;
      const cabX = x0 + truckW * 0.62;
      ctx!.fillStyle = "#ffffff";
      roundRect(cabX, y0 + 20 * scale, cabW, 80 * scale, 14 * scale);
      ctx!.fill();
      ctx!.strokeStyle = "#d8dee3";
      ctx!.stroke();

      // windshield
      ctx!.fillStyle = "#9fd0f0";
      roundRect(cabX + 8 * scale, y0 + 30 * scale, cabW - 16 * scale, 28 * scale, 8 * scale);
      ctx!.fill();

      // chassis
      ctx!.fillStyle = "#374151";
      ctx!.fillRect(x0, y0 + 96 * scale, truckW, 14 * scale);

      // headlight
      ctx!.fillStyle = "#fff6c9";
      ctx!.beginPath();
      ctx!.ellipse(cabX + cabW - 6 * scale, y0 + 70 * scale, 6 * scale, 4 * scale, 0, 0, Math.PI * 2);
      ctx!.fill();

      // wheels
      const wheelY = y0 + 112 * scale + bounce * 0.2;
      drawWheel(x0 + truckW * 0.18, wheelY, 16 * scale, wheelAngle);
      drawWheel(x0 + truckW * 0.42, wheelY, 16 * scale, wheelAngle);
      drawWheel(cabX + cabW * 0.55, wheelY, 16 * scale, wheelAngle);
    }

    let animId = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    function frame(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += dt;

      ctx!.clearRect(0, 0, width, height);
      drawSky();

      clouds.forEach((c) => {
        const cx = ((c.x * width + elapsed * c.speed * 10) % (width + 200)) - 100;
        drawCloud(cx, c.y * height, c.scale);
      });

      const groundY = height * 0.78;
      drawHillLayer(groundY - 6, height * 0.1, "#bfe3c8", elapsed * hillFarSpeed);
      drawHillLayer(groundY, height * 0.06, "#9fd6ae", elapsed * hillNearSpeed);
      drawRoad(groundY, height - groundY, elapsed * roadLineSpeed);

      const bounce = Math.sin(elapsed * 6) * 1.5;
      const wheelAngle = elapsed * 8;

      // Truck sweeps fully off-screen-left -> fully off-screen-right, then loops
      const truckW = Math.min(width * 0.34, 420);
      const loopDuration = 12; // seconds for one full crossing
      const progress = (elapsed % loopDuration) / loopDuration;
      const truckCx = -truckW / 2 + progress * (width + truckW);
      drawTruck(truckCx, groundY, bounce, wheelAngle);

      animId = requestAnimationFrame(frame);
    }

    let observer: IntersectionObserver | undefined;

    if (prefersReducedMotion) {
      frame(performance.now());
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            lastTime = performance.now();
            animId = requestAnimationFrame(frame);
          } else {
            cancelAnimationFrame(animId);
          }
        },
        { threshold: 0.01 }
      );
      observer.observe(canvas);
    }

    return () => {
      cancelAnimationFrame(animId);
      observer?.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
