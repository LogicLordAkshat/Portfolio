"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  // Enhanced default gradient background colors for a deeper, richer feel
  gradientBackgroundStart = "rgb(30, 0, 40)",   // Dark purple
  gradientBackgroundEnd = "rgb(60, 0, 80)",     // Slightly lighter dark purple

  // Enhanced default gradient circle colors for a more vibrant and premium look
  firstColor = "255, 0, 255",                   // Bright magenta/purple
  secondColor = "255, 50, 150",                 // Vibrant pink
  thirdColor = "200, 0, 200",                   // Medium purple
  fourthColor = "255, 100, 200",                // Lighter vibrant pink
  fifthColor = "150, 0, 200",                   // Deeper purple

  // Enhanced pointer color for a distinct glow
  pointerColor = "255, 150, 255",               // Very light pink/purple glow
  size = "80%",
  blendingValue = "hard-light", // Often provides a good blend for these effects
  children,
  className,
  interactive = true,
  containerClassName = "bg-black", // Default black background
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    // Set CSS custom properties for gradient background and colors
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    // Note: size and blendingValue are not dependencies of this effect,
    // as they are set once and don't change based on state/props in this component.
    // However, including them here ensures they are set if the component re-renders
    // with different initial props.
    size,
    blendingValue,
  ]);

  useEffect(() => {
    // Animation loop for the interactive pointer
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX((curX) => curX + (tgX - curX) / 20); // Smoothly move current X towards target X
      setCurY((curY) => curY + (tgY - curY) / 20); // Smoothly move current Y towards target Y
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move); // Request next animation frame
    }
    move(); // Start the animation loop
  }, [tgX, tgY]); // Re-run effect if target X or Y changes

  // Handle mouse movement for interactive pointer
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left); // Calculate target X relative to container
      setTgY(event.clientY - rect.top);  // Calculate target Y relative to container
    }
  };

  // State and effect for Safari browser detection (for blur filter compatibility)
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "w-full h-full absolute overflow-hidden top-0 left-0",
        // Background gradient applied to the container
        "bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* SVG filter for blur effect (hidden) */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" // Adjusts alpha for "gooey" effect
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" /> {/* Blends original with blurred/gooey */}
          </filter>
        </defs>
      </svg>

      {/* Children rendered on top of the gradients */}
      <div className={cn("", className)}>{children}</div>

      {/* Gradients container with blur effect */}
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg", // Base blur
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]" // Safari specific blur or SVG filter
        )}
      >
        {/* Individual gradient circles */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`, // Offset origin for animation
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`, // Offset origin for animation
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`, // Offset origin for animation
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`, // Offset origin for animation
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {/* Interactive pointer glow */}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
