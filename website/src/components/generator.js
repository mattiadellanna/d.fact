import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { useLocation } from "react-router-dom";
import p5 from "p5";
import "p5-svg"; // supporto ufficiale per esportazione SVG

const Generator = forwardRef(({
    size,
    grid = 4,
    minFilled = 5,
    maxFilled = 14,
    circleRadius = 0.4,
    id
}, ref) => {

    const wrapperRef = useRef(null);
    const location = useLocation();

    const [refreshKey, setRefreshKey] = useState(0);
    const [autoSize, setAutoSize] = useState(null);

    const canvasSize = size ?? autoSize;

    // Espone metodi al parent tramite ref
    useImperativeHandle(ref, () => ({
        refresh() {
            setRefreshKey(prev => prev + 1);
        },
        exportSVG() {
            exportAsSVG();
        }
    }));

    // Rigenera al cambio route
    useEffect(() => {
        setRefreshKey(prev => prev + 1);
    }, [location.pathname]);

    // Dimensione dinamica solo se size non è passato
    useEffect(() => {
        if (size || !wrapperRef.current) return;

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                if (width > 0) {
                    setAutoSize(Math.floor(width));
                }
            }
        });

        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, [size]);

    // Funzione di disegno
    const drawSketch = (p, isSVG = false) => {
        const padding = canvasSize * 0.1;
        const cellSize = (canvasSize - padding * 2) / grid;
        const radius = cellSize * circleRadius;
        const mainItem = p.int(p.random(0, grid * grid));
        let pattern = [];

        p.setup = () => {
            if (isSVG) {
                p.createCanvas(canvasSize, canvasSize, p.SVG);
            } else {
                p.createCanvas(canvasSize, canvasSize);
                p.noLoop();
            }

            // Genera pattern
            pattern = Array(grid * grid).fill(0);
            const filledCount = p.int(p.random(minFilled, maxFilled + 1));
            const indices = [...Array(grid * grid).keys()];
            p.shuffle(indices, true);
            for (let i = 0; i < filledCount; i++) {
                pattern[indices[i]] = 1;
            }

            // Disegna pattern
            p.noStroke();
            for (let i = 0; i < grid * grid; i++) {
                const col = i % grid;
                const row = Math.floor(i / grid);
                const x = padding + col * cellSize + cellSize / 2;
                const y = padding + row * cellSize + cellSize / 2;

                if (i === mainItem) {
                    p.fill(247, 202, 24);
                } else if (pattern[i] === 1) {
                    p.fill(p.int(p.random(50, 255)));
                } else {
                    p.noFill();
                }

                p.ellipse(x, y, radius, radius);
            }

            if (isSVG) {
                p.save(`${id || "dfact-logo"}.svg`);
                p.remove();
            }
        };
    };

    // Funzione export SVG
    const exportAsSVG = () => {
        new p5(p => drawSketch(p, true));
    };

    // Rendering canvas normale
    useEffect(() => {
        if (!canvasSize) return;

        const p5Instance = new p5(p => drawSketch(p, false), wrapperRef.current);

        return () => p5Instance.remove();
    }, [canvasSize, grid, minFilled, maxFilled, circleRadius, refreshKey]);

    return (
        <div
            ref={wrapperRef}
            style={{
                width: size ? size : "100%",
                height: size ? size : "auto",
                aspectRatio: size ? "auto" : "1 / 1",
                display: "inline-block",
                verticalAlign: "middle"
            }}
        />
    );
});

export default Generator;
