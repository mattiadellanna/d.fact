import { useEffect, useRef } from "react";
import p5 from "p5";

export default function Generator({
  size = 100,
  grid = 4,
  minFilled = 5,
  maxFilled = 14,
  circleRadius = 0.4
}) {
  const wrapperRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      const padding = size * 0.1;
      const cellSize = (size - padding * 2) / grid;
      const radius = cellSize * circleRadius;
      const mainItem = p.int(p.random(0, 15))

      let pattern = [];

      p.setup = () => {
        p.createCanvas(size, size);
        p.noLoop();
        generatePattern();
        drawPattern();
      };

      function generatePattern() {
        pattern = Array(grid * grid).fill(0);

        const filledCount = p.int(p.random(minFilled, maxFilled + 1));
        const indices = [...Array(grid * grid).keys()];

        p.shuffle(indices, true);

        for (let i = 0; i < filledCount; i++) {
          pattern[indices[i]] = 1;
        }
      }

      function drawPattern() {
        p.noFill();
        p.noStroke();
        for (let i = 0; i < grid * grid; i++) {
          const col = i % grid;
          const row = Math.floor(i / grid);
          const x = padding + col * cellSize + cellSize / 2;
          const y = padding + row * cellSize + cellSize / 2;
          
          if(i === mainItem){
            p.fill(247, 202, 24);
          } else {
            if (pattern[i] === 1) {
                p.fill(p.int(p.random(50, 255)));
            } else {
              p.noFill();
            }
          }
          
          p.ellipse(x, y, radius, radius);
        }
      }
    };

    const p5Instance = new p5(sketch, wrapperRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [size, grid, minFilled, maxFilled]);

  return <div style={{height: size, width: size, display: "inline-block", verticalAlign: "middle"}} ref={wrapperRef} />;
}