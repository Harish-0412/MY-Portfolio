import { useEffect, useRef } from "react";

type GridPoint = {
  originX: number;
  originY: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  brightness: number;
};

const spacing = 60;
const radius = 350;

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gridBounds = canvas?.parentElement;
    const section = canvas?.closest("section");
    const context = canvas?.getContext("2d");
    if (!canvas || !gridBounds || !section || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let visible = false;
    let disposed = false;
    let width = 0;
    let height = 0;
    let columns = 0;
    let rows = 0;
    let points: GridPoint[] = [];
    let lastTime = 0;
    const pointer = { x: 0, y: 0, active: false };

    const interactive = () => !reducedMotion.matches && finePointer.matches;
    const canAnimate = () =>
      interactive() && visible && !document.hidden && !disposed;
    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      // A single path keeps the resting grid inexpensive, even on wide displays.
      context.lineWidth = 0.5;
      context.strokeStyle = "rgba(120, 120, 120, 0.09)";
      context.beginPath();
      points.forEach((point, index) => {
        const right =
          index % columns < columns - 1 ? points[index + 1] : undefined;
        const below = points[index + columns];
        if (right) {
          context.moveTo(point.x, point.y);
          context.lineTo(right.x, right.y);
        }
        if (below) {
          context.moveTo(point.x, point.y);
          context.lineTo(below.x, below.y);
        }
      });
      context.stroke();

      points.forEach((point, index) => {
        const neighbors = [
          index % columns < columns - 1 ? points[index + 1] : undefined,
          points[index + columns],
        ];
        neighbors.forEach((neighbor) => {
          if (!neighbor) return;
          const brightness = (point.brightness + neighbor.brightness) / 2;
          if (brightness < 0.015) return;
          context.lineWidth = 0.5 + brightness * 1.4;
          context.strokeStyle = `rgba(250, 250, 250, ${brightness * 0.48})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.stroke();
        });
        context.fillStyle = `rgba(250, 250, 250, ${0.09 + point.brightness * 0.65})`;
        context.beginPath();
        context.arc(
          point.x,
          point.y,
          1.5 + point.brightness * 0.8,
          0,
          Math.PI * 2,
        );
        context.fill();
      });
    };

    const tick = (time: number) => {
      frame = 0;
      if (!canAnimate()) return;
      const delta = lastTime ? Math.min((time - lastTime) / 16.667, 2) : 1;
      lastTime = time;
      const damping = Math.pow(0.83, delta);
      let moving = pointer.active;

      points.forEach((point) => {
        const distanceX = pointer.x - point.originX;
        const distanceY = pointer.y - point.originY;
        const distance = Math.hypot(distanceX, distanceY);
        const influence = pointer.active
          ? Math.max(0, 1 - distance / radius) ** 2
          : 0;
        const targetX = point.originX + distanceX * influence * 0.42;
        const targetY = point.originY + distanceY * influence * 0.42;
        point.velocityX =
          (point.velocityX + (targetX - point.x) * 0.035 * delta) * damping;
        point.velocityY =
          (point.velocityY + (targetY - point.y) * 0.035 * delta) * damping;
        point.x += point.velocityX * delta;
        point.y += point.velocityY * delta;
        point.brightness +=
          (influence - point.brightness) * Math.min(0.16 * delta, 1);
        if (
          Math.abs(point.velocityX) + Math.abs(point.velocityY) > 0.01 ||
          point.brightness > 0.005
        ) {
          moving = true;
        }
      });
      draw();
      if (moving) frame = window.requestAnimationFrame(tick);
      else lastTime = 0;
    };

    const start = () => {
      if (canAnimate() && !frame) frame = window.requestAnimationFrame(tick);
    };

    const resize = () => {
      const bounds = gridBounds.getBoundingClientRect();
      width = Math.round(bounds.width);
      height = Math.round(bounds.height);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      columns = Math.ceil(width / spacing) + 3;
      rows = Math.ceil(height / spacing) + 3;
      points = Array.from({ length: columns * rows }, (_, index) => {
        const originX = ((index % columns) - 1) * spacing;
        const originY = (Math.floor(index / columns) - 1) * spacing;
        return {
          originX,
          originY,
          x: originX,
          y: originY,
          velocityX: 0,
          velocityY: 0,
          brightness: 0,
        };
      });
      draw();
      start();
    };

    const move = (event: PointerEvent) => {
      if (!interactive() || event.pointerType === "touch") return;
      const bounds = gridBounds.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      start();
    };
    const leave = () => {
      pointer.active = false;
      start();
    };
    const press = (event: PointerEvent) => {
      if (!interactive() || event.pointerType === "touch") return;
      move(event);
      points.forEach((point) => {
        const x = point.originX - pointer.x;
        const y = point.originY - pointer.y;
        const distance = Math.hypot(x, y);
        if (distance < 1 || distance > radius) return;
        const force = (1 - distance / radius) ** 2 * 6;
        point.velocityX += (x / distance) * force;
        point.velocityY += (y / distance) * force;
      });
      start();
    };
    const preferencesChanged = () => {
      pointer.active = false;
      stop();
      points.forEach((point) => {
        point.x = point.originX;
        point.y = point.originY;
        point.velocityX = 0;
        point.velocityY = 0;
        point.brightness = 0;
      });
      draw();
      start();
    };
    const visibilityChanged = () => {
      if (document.hidden) stop();
      else start();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(gridBounds);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else {
        pointer.active = false;
        stop();
      }
    });
    intersectionObserver.observe(section);
    section.addEventListener("pointermove", move, { passive: true });
    section.addEventListener("pointerleave", leave, { passive: true });
    section.addEventListener("pointerdown", press, { passive: true });
    reducedMotion.addEventListener("change", preferencesChanged);
    finePointer.addEventListener("change", preferencesChanged);
    document.addEventListener("visibilitychange", visibilityChanged);
    resize();

    return () => {
      disposed = true;
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", leave);
      section.removeEventListener("pointerdown", press);
      reducedMotion.removeEventListener("change", preferencesChanged);
      finePointer.removeEventListener("change", preferencesChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
