"use client";
import { useRef, useEffect } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    let isMobile = window.innerWidth < 768;

    const resize = () => {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
      isMobile = window.innerWidth < 768;
    };
    resize();
    window.addEventListener("resize", resize);

    // ---------------- Mouse / Touch ----------------
    const mouse = {
      x: null,
      y: null,
      radius: isMobile ? 80 : 120,
    };

    const mouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const touchMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };

    const leave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseleave", leave);
    canvas.addEventListener("touchmove", touchMove, { passive: true });
    canvas.addEventListener("touchend", leave);

    // ---------------- Particle ----------------
    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.vx = (Math.random() - 0.5) * (isMobile ? 0.4 : 0.8);
        this.vy = (Math.random() - 0.5) * (isMobile ? 0.4 : 0.8);

        this.size = isMobile ? 2.5 : 4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * (isMobile ? 10 : 20);
            this.y += (dy / dist) * force * (isMobile ? 10 : 20);
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#20C996";
        ctx.fill();
      }
    }

    // ---------------- Init ----------------
    const particles = [];
    const COUNT = isMobile ? 150 : 300; // 🔥 mobile = half

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    // ---------------- Lines ----------------
    const connect = () => {
      const maxDist = isMobile ? 100 : 140;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(255,255,255,${0.8 - dist / 200})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // ---------------- Animate ----------------
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // ---------------- Cleanup ----------------
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", mouseMove);
      canvas.removeEventListener("mouseleave", leave);
      canvas.removeEventListener("touchmove", touchMove);
      canvas.removeEventListener("touchend", leave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}
