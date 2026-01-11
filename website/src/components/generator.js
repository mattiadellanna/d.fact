import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { useLocation } from "react-router-dom";
import p5 from "p5";
import "p5-svg";
import TypoUrl from "../assets/typo.svg";

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
    const [patternData, setPatternData] = useState([]); 

    useImperativeHandle(ref, () => ({
        refresh() { setRefreshKey(prev => prev + 1); },
        exportSVG() { exportAsSVG(); },
        exportPNG() { return exportAsPNG(); }
    }));

    useEffect(() => {
        setRefreshKey(prev => prev + 1);
    }, [location.pathname]);

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

    const drawPattern = (p) => {
        const padding = canvasSize * 0.1;
        const cellSize = (canvasSize - padding * 2) / grid;
        const radius = cellSize * circleRadius;
        const mainItem = p.int(p.random(0, grid * grid));
        let pattern = [];
        const data = [];

        p.setup = () => {
            p.createCanvas(canvasSize, canvasSize);
            p.noLoop();

            pattern = Array(grid * grid).fill(0);
            const filledCount = p.int(p.random(minFilled, maxFilled + 1));
            const indices = [...Array(grid * grid).keys()];
            p.shuffle(indices, true);
            for (let i = 0; i < filledCount; i++) {
                pattern[indices[i]] = 1;
            }

            p.noStroke();
            for (let i = 0; i < grid * grid; i++) {
                const col = i % grid;
                const row = Math.floor(i / grid);
                const x = padding + col * cellSize + cellSize / 2;
                const y = padding + row * cellSize + cellSize / 2;

                let colorValue = null;
                if (i === mainItem) {
                    colorValue = "#F7CA18";
                } else if (pattern[i] === 1) {
                    const gray = Math.floor(Math.random() * 256);
                    colorValue = `rgb(${gray},${gray},${gray})`;
                }
                
                if (colorValue) {
                    p.fill(colorValue);
                    p.ellipse(x, y, radius, radius);
                    data.push({ x, y, r: radius/2, color: colorValue }); 
                }
            }

            setPatternData(data);
        };
    };

    const exportAsSVG = async () => {
        if (!patternData.length) return;

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        
        const totalWidth = canvasSize * 5;
        svg.setAttribute("width", totalWidth);
        svg.setAttribute("height", canvasSize);
        svg.setAttribute("viewBox", `0 0 ${totalWidth} ${canvasSize}`);
        
        patternData.forEach(d => {
            const circle = document.createElementNS(svgNS, "circle");
            circle.setAttribute("cx", d.x);
            circle.setAttribute("cy", d.y);
            circle.setAttribute("r", d.r);
            circle.setAttribute("fill", d.color);
            svg.appendChild(circle);
        });

        // Carica il file typo.svg come testo
        const response = await fetch(TypoUrl);
        const typoText = await response.text();

        // Converti in documento SVG
        const parser = new DOMParser();
        const typoDoc = parser.parseFromString(typoText, "image/svg+xml");
        const typoSvg = typoDoc.documentElement;

        // crea un <g> per traslare e scalare
        const padding = canvasSize * 0.1;
        const g = document.createElementNS(svgNS, "g");
        g.setAttribute("height", `${canvasSize - (padding * 2)}px`);
        g.setAttribute("transform", `translate(${canvasSize}, ${canvasSize / 100})`);


        // sposta tutti i figli di typoSvg dentro g
        Array.from(typoSvg.childNodes).forEach(node => {
            g.appendChild(node.cloneNode(true));
        });

        svg.appendChild(g);
        
        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(svg);
        const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "dfact-logo.svg";
        a.click();
        URL.revokeObjectURL(url);
    };

    const exportAsPNG = () => {
        const canvas = wrapperRef.current?.querySelector("canvas");
        if (!canvas) return null;
        return canvas.toDataURL("image/png");
    };

    useEffect(() => {
        if (!canvasSize) return;

        const p5Instance = new p5(p => drawPattern(p, false), wrapperRef.current);

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