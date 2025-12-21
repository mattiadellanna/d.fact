import { useEffect, useRef, useState } from "react";
import p5 from "p5";

export default function Generator({
  size = 300,
  grid = 4,
  minFilled = 5,
  maxFilled = 14,
  circleRadius = 0.4,
}) {
  const wrapperRef = useRef();
  const [pattern, setPattern] = useState([]);

  const padding = size * 0.1;
  const cellSize = (size - padding * 2) / grid;
  const radius = cellSize * circleRadius;

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(size, size);
        p.noLoop();
        generatePattern(p);
      };

      p.draw = () => {
        drawPattern(p);
      };

      function generatePattern(p) {
        const total = grid * grid;
        const filledCount = p.int(p.random(minFilled, maxFilled + 1));
        const indices = [...Array(total).keys()];
        p.shuffle(indices, true);

        const data = Array(total).fill(false);
        for (let i = 0; i < filledCount; i++) {
          data[indices[i]] = true;
        }

        setPattern(data);
      }

      function drawPattern(p) {
        p.background(255);
        p.noStroke();

        pattern.forEach((filled, i) => {
          const col = i % grid;
          const row = Math.floor(i / grid);

          const x = padding + col * cellSize + cellSize / 2;
          const y = padding + row * cellSize + cellSize / 2;

          if (filled) {
            p.fill(0);
          } else {
            p.noFill();
            p.stroke(180);
            p.strokeWeight(1);
          }

          p.ellipse(x, y, radius, radius);
        });
      }
    };

    const instance = new p5(sketch, wrapperRef.current);
    return () => instance.remove();
  }, [pattern, size, grid, minFilled, maxFilled]);

  // ---- SVG EXPORT ----
  const exportSVG = () => {
    const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
  ${pattern
    .map((filled, i) => {
      const col = i % grid;
      const row = Math.floor(i / grid);

      const x = padding + col * cellSize + cellSize / 2;
      const y = padding + row * cellSize + cellSize / 2;

      return filled
        ? `<circle cx="${x}" cy="${y}" r="${radius / 2}" fill="black" />`
        : `<circle cx="${x}" cy="${y}" r="${radius / 2}" fill="none" stroke="#bbb" stroke-width="1" />`;
    })
    .join("")}
</svg>`;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "dfact-pattern.svg";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div ref={wrapperRef} />
      <button onClick={exportSVG} style={{ marginTop: 16 }}>
        Download SVG
      </button>
    </div>
  );
}
