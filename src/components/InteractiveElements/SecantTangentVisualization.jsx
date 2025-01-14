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

// We'll use your color palette:
const BG_CARD = "#f2e8d5";   // Slightly darker beige for card
const BG_BEIGE = "#faf3dc";  // Lighter background
const BLUE = "#30628b";      // Byrne's Blue
const RED = "#c03b2d";       // Byrne's Red
const GREEN = "#3bb25a";     // Vibrant green for tangent
const YELLOW = "#f0c34e";    // Byrne's Yellow

/**
 * A "Brilliant.org–like" interactive to show how secant lines approach
 * a tangent line as Δx -> 0, with a "magnifier circle" that zooms in
 * around the tangency point.
 *
 * Function: f(x) = x^2
 * Tangent at x=a => derivative( x^2 ) = 2a, so slope=2a
 * We'll pick a=2, so tangent slope=4.
 *
 * We define a slider range: [0.0001..0.5], step=0.0001
 *   - right = 0.5 (largest Δx)
 *   - left  = 0.0001 (very small, close to 0)
 *
 * As we slide left => Δx => smaller => magnification factor => bigger
 */
function SecantTangentVisualization() {
    const [deltaX, setDeltaX] = useState(0.5); // Start with 0.5 on the right
    const mainRef = useRef(null);

    // The function & tangent point
    const f = (x) => x * x;
    const a = 2; // We'll use a=2
    const slopeTangent = 2 * a; // derivative of x^2 => 2x => 4 at x=2

    // D3 chart config
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    // We'll define xRange = [0, 4] for the base function
    const xMin = 0;
    const xMax = 4;

    // We'll define a magnification factor that grows as deltaX goes down
    // e.g. if deltaX=0.5 => mag=1, if deltaX=0.0001 => mag ~ 10
    // We'll define a formula with an upper bound ~10
    const minDX = 0.0001;
    const maxDX = 0.5;
    const fraction = (maxDX - deltaX) / (maxDX - minDX); // 0..1
    const magnifyFactor = 1 + fraction * 9; // range ~ [1..10]

    // Some derived text for slopes
    const slopeSecant = () => {
        const dy = f(a + deltaX) - f(a);
        return dy / deltaX;
    };

    useEffect(() => {
        const container = d3.select(mainRef.current);
        container.selectAll("*").remove(); // clear

        // Create SVG
        const svg = container
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("background", BG_BEIGE);

        // Scales
        const xScale = d3.scaleLinear([xMin, xMax], [margin.left, width - margin.right]);
        const yMax = xMax * xMax; // 16
        const yScale = d3.scaleLinear([0, yMax], [height - margin.bottom, margin.top]);

        // Axes
        const xAxis = d3.axisBottom(xScale).ticks(5);
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(xAxis);

        const yAxis = d3.axisLeft(yScale).ticks(5);
        svg
            .append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(yAxis);

        // The function data
        const dataFn = d3.range(xMin, xMax + 0.01, 0.01).map((xx) => ({
            x: xx,
            y: f(xx),
        }));

        const lineGen = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y));

        svg
            .append("path")
            .datum(dataFn)
            .attr("fill", "none")
            .attr("stroke", BLUE)
            .attr("stroke-width", 2)
            .attr("d", lineGen);

        // Points for secant
        const x1 = a;
        const y1 = f(a);
        const x2 = a + deltaX;
        const y2 = f(a + deltaX);
        const slopeSec = slopeSecant(); // numeric slope

        // Secant line range
        // let's extend a bit
        const secMinX = Math.min(x1, x2) - 0.2;
        const secMaxX = Math.max(x1, x2) + 0.2;
        const secLineData = d3.range(secMinX, secMaxX, 0.01).map((xx) => {
            const yy = slopeSec * (xx - x1) + y1;
            return { x: xx, y: yy };
        });

        // Tangent line range
        const tangSlope = slopeTangent;
        const tangMinX = a - 0.3;
        const tangMaxX = a + 0.3;
        const tangLineData = d3.range(tangMinX, tangMaxX, 0.01).map((xx) => {
            const yy = tangSlope * (xx - a) + y1;
            return { x: xx, y: yy };
        });

        // We'll draw normal function, secant, tangent in a group "gBase"
        const gBase = svg
            .append("g")
            .attr("class", "gBase");

        // Secant
        gBase
            .append("path")
            .datum(secLineData)
            .attr("fill", "none")
            .attr("stroke", RED)
            .attr("stroke-width", 2)
            .attr("d", lineGen);

        // Tangent
        gBase
            .append("path")
            .datum(tangLineData)
            .attr("fill", "none")
            .attr("stroke", GREEN)
            .attr("stroke-width", 2)
            .attr("d", lineGen);

        // Mark the two points
        [[x1, y1], [x2, y2]].forEach(([xx, yy]) => {
            gBase
                .append("circle")
                .attr("cx", xScale(xx))
                .attr("cy", yScale(yy))
                .attr("r", 4)
                .attr("fill", "#000");
        });

        // Now define a magnifier circle, centered at (a, f(a)) in screen coords
        const cx = xScale(a);
        const cy = yScale(y1);
        const magRadius = 50; // radius of the magnifier circle

        // We'll define a clipPath referencing a circle
        svg
            .append("clipPath")
            .attr("id", "magnifier-clip")
            .append("circle")
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("r", magRadius);

        // We'll create a group "gMagnify" that re-draws the function, secant, tangent lines scaled
        // around the point (cx, cy)
        const gMagnify = svg
            .append("g")
            .attr("class", "gMagnify")
            .attr("clip-path", "url(#magnifier-clip)");

        // We'll do a transform: translate(cx, cy), scale(magnifyFactor), translate(-cx, -cy)
        gMagnify
            .attr(
                "transform",
                `translate(${cx},${cy}) scale(${magnifyFactor}) translate(${-cx},${-cy})`
            );

        // Now re-draw function, secant, tangent in the "magnified" group
        // We'll reuse same data and line generator
        gMagnify
            .append("path")
            .datum(dataFn)
            .attr("fill", "none")
            .attr("stroke", BLUE)
            .attr("stroke-width", 2)
            .attr("d", lineGen);

        gMagnify
            .append("path")
            .datum(secLineData)
            .attr("fill", "none")
            .attr("stroke", RED)
            .attr("stroke-width", 2)
            .attr("d", lineGen);

        gMagnify
            .append("path")
            .datum(tangLineData)
            .attr("fill", "none")
            .attr("stroke", GREEN)
            .attr("stroke-width", 2)
            .attr("d", lineGen);

        // Points in the magnified region
        [[x1, y1], [x2, y2]].forEach(([xx, yy]) => {
            gMagnify
                .append("circle")
                .attr("cx", xScale(xx))
                .attr("cy", yScale(yy))
                .attr("r", 4)
                .attr("fill", "#000");
        });

        // Outline the magnifier circle for clarity
        svg
            .append("circle")
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("r", magRadius)
            .attr("fill", "none")
            .attr("stroke", "#333")
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", "4,4");
    }, [deltaX]);

    // slope of secant
    const slopeSec = (( (a + deltaX)**2 - a**2 ) / deltaX).toFixed(3);

    return (
        <Box
            p={4}
            border="2px solid #30628b"
            borderRadius="md"
            bg={BG_CARD}
            boxShadow="md"
            maxW={{ base: "95vw", md: "700px" }}
            mx="auto"
            mt={8}
        >
            <Heading
                as="h2"
                size="md"
                mb={4}
                textAlign="left"
                color="black"
            >
                Visualizing Secant & Tangent Lines
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} mb={4} color="black">
                Drag the slider from the right (larger <em>Δx</em>) to the left (smaller <em>Δx</em>) and
                watch how the red secant line approaches the green tangent line. The circle acts like
                a magnifier around x = 2, showing the detail as <em>Δx</em> \(\to 0\).
            </Text>

            {/* Main D3 container */}
            <Box ref={mainRef} overflow="hidden" />

            {/* Slider for Δx in [0.0001..0.5] */}
            <Box mt={6}>
                <Text fontSize={{ base: "md", md: "lg" }} mb={2} color="black">
                    Adjust Δx:
                </Text>
                <Slider
                    min={0.0001}
                    max={0.5}
                    step={0.0001}
                    value={deltaX}
                    onChange={setDeltaX}
                    aria-label="DeltaX Slider"
                >
                    <SliderTrack bg={BG_BEIGE}>
                        <SliderFilledTrack bg={BLUE} />
                    </SliderTrack>
                    <SliderThumb boxSize={5} bg={RED} />
                </Slider>
                <Text mt={2} fontSize={{ base: "md", md: "lg" }} color="black">
                    Δx: {deltaX.toFixed(4)}
                </Text>
            </Box>

            {/* Display slopes & magnify factor */}
            <VStack align="start" mt={4} spacing={1}>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Slope of secant: {slopeSec}
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Slope of tangent at x=2: 4
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Magnification: {(1 + ((0.5 - deltaX) / (0.5 - 0.0001)) * 9).toFixed(2)}×
                </Text>
            </VStack>
        </Box>
    );
}

export default SecantTangentVisualization;
