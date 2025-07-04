import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const maxx = document.body.clientWidth;
    const maxy = document.body.clientHeight;
    const halfx = maxx / 2;
    const halfy = maxy / 2;
    canvas.width = maxx;
    canvas.height = maxy;

    const dotCount = 500;
    const dots = [];

    // Dot class
    function Dot() {
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
    }

    // Draw method
    Dot.prototype.draw = function () {
      const dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
      const dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
      context.fillStyle = `rgb(${this.color}, ${this.color}, ${this.color})`;
      context.fillRect(dx, dy, this.size, this.size);
    };

    // Move method
    Dot.prototype.move = function () {
      this.alpha += this.speed;
      if (Math.random() * 100 < 50) {
        this.color += 1;
      } else {
        this.color -= 1;
      }
    };

    // Create dots
    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    // Render animation
    function render() {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, maxx, maxy);

      for (let i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }

      requestAnimationFrame(render);
    }

    render();

    // Handle resize
    const handleResize = () => {
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.7,
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedBackground;
