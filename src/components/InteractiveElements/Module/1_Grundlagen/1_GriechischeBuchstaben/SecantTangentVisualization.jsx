// File: src/components/InteractiveElements/SecantTangentVisualization.jsx

import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Heading,
    VStack,
} from "@chakra-ui/react";
import * as d3 from "d3";

// Adjusted color palette
const BG_CARD = "#f2e8d5";   // Slightly darker beige for card
const BG_BEIGE = "#faf3dc";  // Lighter background
const BLUE = "#30628b";      // Byrne's Blue (function)
const RED = "#b02d22";       // Deeper Byrne's Red (secant line / point)
const GREEN = "#2b9a4a";     // Deeper Byrne's Green (tangent line / point)

function SecantTangentVisualization() {
    const [deltaX, setDeltaX] = useState(0.5); // Start with 0.5 on the right
    const mainRef = useRef(null);

    // We'll store references to important D3 elements and scales in here
    const chartRef = useRef(null);

    // The function & tangent point
    const f = (x) => x * x;
    const a = 2;
    const slopeTangent = 2 * a; // derivative of x^2 => 2x => 4 at x=2

    // Base chart dimensions (responsive via 'viewBox')
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    // We'll define xRange = [0, 4] for the base function
    const xMin = 0;
    const xMax = 4;

    // Helper to compute secant slope
    const slopeSecant = () => (f(a + deltaX) - f(a)) / deltaX;

    // For numeric display
    const slopeSec = slopeSecant().toFixed(3);

    // Magnification logic
    const minDX = 0.0001;
    const maxDX = 0.5;
    const fraction = (maxDX - deltaX) / (maxDX - minDX); // 0..1
    const magnifyFactor = 1 + fraction * 9; // ~ [1..10]

    // ----------- INITIAL CREATE (once) & UPDATES -----------
    useEffect(() => {
        if (!chartRef.current) {
            // ----------------------------------------
            // 1) CREATE CHART (runs only on first mount)
            // ----------------------------------------
            const container = d3.select(mainRef.current);

            // Create responsive SVG
            const svg = container
                .append("svg")
                .attr("viewBox", `0 0 ${width} ${height}`)
                .attr("preserveAspectRatio", "xMidYMid meet")
                .style("width", "100%")
                .style("height", "auto")
                .style("background", BG_BEIGE);

            // ==== DEFINITIONS (lens gradient + shadow) ====
            const defs = svg.append("defs");

            // Radial gradient for lens effect
            const radialGradient = defs
                .append("radialGradient")
                .attr("id", "lens-gradient")
                .attr("cx", "50%")
                .attr("cy", "50%")
                .attr("r", "70%");
            radialGradient
                .append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "#fff")
                .attr("stop-opacity", 0.3);
            radialGradient
                .append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#fff")
                .attr("stop-opacity", 0);

            // Drop shadow for magnifier lens
            const filter = defs
                .append("filter")
                .attr("id", "magnifier-shadow")
                .attr("x", "-40%")
                .attr("y", "-40%")
                .attr("width", "180%")
                .attr("height", "180%");
            filter
                .append("feDropShadow")
                .attr("dx", 0)
                .attr("dy", 2)
                .attr("stdDeviation", 4)
                .attr("flood-color", "#000")
                .attr("flood-opacity", 0.3);

            // ==== SCALES & AXES ====
            const xScale = d3.scaleLinear([xMin, xMax], [margin.left, width - margin.right]);
            const yMax = xMax * xMax; // 16
            const yScale = d3.scaleLinear([0, yMax], [height - margin.bottom, margin.top]);

            const xAxis = d3.axisBottom(xScale).ticks(5);
            const yAxis = d3.axisLeft(yScale).ticks(5);

            svg
                .append("g")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(xAxis)
                .attr("color", "#333");

            svg
                .append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .call(yAxis)
                .attr("color", "#333");

            // ==== DATA & LINE GENERATORS ====
            // Precompute the function curve
            const dataFn = d3.range(xMin, xMax + 0.01, 0.01).map((xx) => ({
                x: xx,
                y: f(xx),
            }));

            const lineGen = d3
                .line()
                .x((d) => xScale(d.x))
                .y((d) => yScale(d.y))
                .curve(d3.curveMonotoneX);

            // ---- MAIN FUNCTION PATH (BLUE) ----
            svg
                .append("path")
                .datum(dataFn)
                .attr("fill", "none")
                .attr("stroke", BLUE)
                .attr("stroke-width", 2)
                .attr("d", lineGen);

            // Tangent line range for a=2 (fixed)
            const tangSlope = slopeTangent; // 4
            const tangMinX = a - 0.3;
            const tangMaxX = a + 0.3;
            const tangentData = d3.range(tangMinX, tangMaxX, 0.01).map((xx) => {
                const yy = tangSlope * (xx - a) + f(a);
                return { x: xx, y: yy };
            });

            // Base group for lines (non-magnified)
            const gBase = svg.append("g").attr("class", "gBase");

            // Tangent (green, fixed)
            gBase
                .append("path")
                .datum(tangentData)
                .attr("fill", "none")
                .attr("stroke", GREEN)
                .attr("stroke-width", 2)
                .attr("d", lineGen);

            // Tangent point at (2,4)
            gBase
                .append("circle")
                .attr("cx", xScale(a))
                .attr("cy", yScale(f(a)))
                .attr("r", 5)
                .attr("fill", "#000");

            // Create placeholders for the secant line & circle (we'll update them dynamically)
            const secantPath = gBase
                .append("path")
                .attr("fill", "none")
                .attr("stroke", RED)
                .attr("stroke-width", 2);

            const secantCircle = gBase
                .append("circle")
                .attr("r", 5)
                .attr("fill", RED);

            // ---- MAGNIFIER SETUP (clip, group, lens circle) ----
            const cx = xScale(a);
            const cy = yScale(f(a));
            const magRadius = 50;

            // Clip path for the magnifier
            defs
                .append("clipPath")
                .attr("id", "magnifier-clip")
                .append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", magRadius);

            // Create the magnified group
            const gMagnify = svg.append("g").attr("class", "gMagnify");

            // Same function path inside magnifier
            gMagnify
                .append("path")
                .datum(dataFn)
                .attr("fill", "none")
                .attr("stroke", BLUE)
                .attr("stroke-width", 2)
                .attr("d", lineGen);

            // Tangent inside magnifier (fixed data)
            gMagnify
                .append("path")
                .datum(tangentData)
                .attr("fill", "none")
                .attr("stroke", GREEN)
                .attr("stroke-width", 2)
                .attr("d", lineGen);

            // Secant path for magnifier (we'll update with new data)
            const secantPathMag = gMagnify
                .append("path")
                .attr("fill", "none")
                .attr("stroke", RED)
                .attr("stroke-width", 2);

            // Tangent point (black)
            gMagnify
                .append("circle")
                .attr("cx", xScale(a))
                .attr("cy", yScale(f(a)))
                .attr("r", 5)
                .attr("fill", "#000");

            // Secant point for magnifier
            const secantCircleMag = gMagnify
                .append("circle")
                .attr("r", 5)
                .attr("fill", RED);

            // Apply the clip-path
            gMagnify.attr("clip-path", "url(#magnifier-clip)");

            // Lens circle on top with gradient + shadow
            svg
                .append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", magRadius)
                .attr("fill", "url(#lens-gradient)")
                .attr("filter", "url(#magnifier-shadow)")
                .attr("pointer-events", "none");

            // Store everything we need to update in chartRef
            chartRef.current = {
                svg,
                xScale,
                yScale,
                lineGen,
                secantPath,
                secantCircle,
                secantPathMag,
                secantCircleMag,
                gMagnify,
                cx,
                cy,
            };
        }

        // ----------------------------------------
        // 2) UPDATE CHART (runs every slider move)
        // ----------------------------------------
        updateChart(deltaX);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deltaX]);

    // This function updates only the secant line, its circle, and the magnifier's scale
    const updateChart = (dX) => {
        if (!chartRef.current) return; // Safety

        const {
            xScale,
            yScale,
            lineGen,
            secantPath,
            secantCircle,
            secantPathMag,
            secantCircleMag,
            gMagnify,
            cx,
            cy,
        } = chartRef.current;

        // Recompute secant data
        const x1 = a;
        const y1 = f(a);
        const x2 = a + dX;
        const y2 = f(a + dX);
        const slope = (y2 - y1) / dX;

        // Extended domain for secant line
        const secMinX = Math.min(x1, x2) - 0.2;
        const secMaxX = Math.max(x1, x2) + 0.2;
        const secLineData = d3.range(secMinX, secMaxX, 0.01).map((xx) => {
            const yy = slope * (xx - x1) + y1;
            return { x: xx, y: yy };
        });

        // Update base secant path
        secantPath
            .datum(secLineData)
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .attr("d", lineGen);

        // Update base secant circle
        secantCircle
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .attr("cx", xScale(x2))
            .attr("cy", yScale(y2));

        // Update magnified secant path
        secantPathMag
            .datum(secLineData)
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .attr("d", lineGen);

        // Update magnified secant circle
        secantCircleMag
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .attr("cx", xScale(x2))
            .attr("cy", yScale(y2));

        // Update magnifier scale
        const minDX = 0.0001;
        const maxDX = 0.5;
        const fraction = (maxDX - dX) / (maxDX - minDX);
        const factor = 1 + fraction * 9; // ~ [1..10]

        gMagnify
            .transition()
            .duration(200)
            .ease(d3.easeLinear)
            .attr(
                "transform",
                `translate(${cx},${cy}) scale(${factor}) translate(${-cx},${-cy})`
            );
    };

    return (
        <Box
            p={4}
            border={`2px solid ${BLUE}`}
            borderRadius="md"
            bg={BG_CARD}
            boxShadow="lg"
            maxW={{ base: "95vw", md: "700px" }}
            mx="auto"
            mt={8}
        >
            <Heading
                as="h2"
                size="lg"
                mb={4}
                color="#000"
                textAlign="left"
                fontWeight="bold"
            >
                Visualisierung der Funktionsgrenzwerte
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} mb={4} color="#000">
                Wenn Δx gegen 0 strebt, nähert sich die tiefrote <strong>Sekante </strong>
                immer mehr der tiefgrünen <strong>Tangente</strong> an der Stelle <em>x = 2</em>.
                Verschiebe den Regler, um diesen Vorgang <em>dynamisch</em> zu beobachten.
                Die Linse in der Mitte bietet eine subtile Vergrößerung des Bereichs um <em>x = 2</em>.
            </Text>

            {/* Main D3 container */}
            <Box ref={mainRef} overflow="hidden" />

            {/* Slider for Δx */}
            <Box mt={6} bg="#faf3dc" p={4} borderRadius="md" boxShadow="md">
                <Text fontSize={{ base: "md", md: "lg" }} mb={2} color="black">
                    Ändere Δx:
                </Text>

                <Slider
                    min={0.0001}
                    max={0.5}
                    step={0.0001}
                    value={deltaX}
                    onChange={setDeltaX}
                    aria-label="DeltaX Slider"
                >
                    <SliderTrack bg={"#f2e8d5"}>
                        <SliderFilledTrack bg={BLUE} />
                    </SliderTrack>
                    <SliderThumb boxSize={5} bg={RED} />
                </Slider>

                <Text mt={2} fontSize={{ base: "md", md: "lg" }} color="black">
                    Δx = {deltaX.toFixed(4)}
                </Text>
            </Box>

            {/* Display slopes & magnify factor */}
            <VStack align="start" mt={4} spacing={1}>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Steigung der Sekante: <strong>{slopeSec}</strong>
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Steigung der Tangente bei x=2 beträgt: <strong>4</strong>
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Vergrößerung:{" "}
                    <strong>
                        {(1 + fraction * 9).toFixed(2)}×
                    </strong>
                </Text>
            </VStack>
        </Box>
    );
}

export default SecantTangentVisualization;
