"use client";
import { useRef, useEffect } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    const resize = () => {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ---------------- Mouse ----------------
    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    const mouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const mouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseleave", mouseLeave);

    // ---------------- Particle ----------------
    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.baseX = this.x;
        this.baseY = this.y;

        this.vx = (Math.random() - 0.5) * 0.80;
        this.vy = (Math.random() - 0.5) * 0.80;

        this.size = 4;
      }

      update() {
        // normal movement
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // mouse interaction (BREAK effect)
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 20;
            this.y += (dy / dist) * force * 20;
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
    const COUNT = 300;

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    // ---------------- Lines ----------------
    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
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
      canvas.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}
