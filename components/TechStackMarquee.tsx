"use client"; // This directive indicates that this component should be rendered on the client side.

import { cn } from "@/lib/utils"; // Assuming you have a utility for combining class names
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image"; // Import Image for optimized images in Next.js

interface TechStackMarqueeProps {
  items: {
    name: string;
    img: string;
  }[];
  direction?: "left" | "right"; // Direction of the scroll animation
  speed?: "fast" | "normal" | "slow"; // Speed of the scroll animation
  pauseOnHover?: boolean; // Whether the animation should pause on hover
  className?: string; // Additional Tailwind CSS classes for the container
}

export const TechStackMarquee = ({
  items,
  direction = "left", // Default direction is left
  speed = "normal",   // Default speed is normal
  pauseOnHover = false, // Default to pause on hover
  className,          // Custom class names
}: TechStackMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  // State to control when the animation starts (after content duplication)
  const [start, setStart] = useState(false);

  // Effect to add animation and duplicate items when the component mounts
  useEffect(() => {
    addAnimation();
  }, []); // Runs once on mount

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items to create a seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true); // Deep clone the item
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem); // Append the duplicate
        }
      });

      // Set CSS custom properties for animation direction and duration
      getDirection();
      getSpeed();
      setStart(true); // Start the animation after setup
    }
  }

  // Function to set the animation direction via CSS custom property
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse" // 'forwards' for left-to-right, 'reverse' for right-to-left visual movement
      );
    }
  };

  // Function to set the animation speed (duration) via CSS custom property
  const getSpeed = () => {
    if (containerRef.current) {
      const durations = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty("--animation-duration", durations[speed]);
    }
  };

  return (
    <div className="py-20"> {/* Padding for the entire section */}
      <h1 className="heading text-center mb-12"> {/* Heading for the tech stack */}
        My{" "}
        {/* Gradient text styling for "Tech Stack" */}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Tech Stack
        </span>
      </h1>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 w-full overflow-hidden",
          // Mask image for fade effect at the edges
          "[mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]",
          className
        )}
      >
        {/* NEW: Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-10" />
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap", // MODIFIED: Changed gap-16 to gap-8
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className="flex flex-col items-center justify-center p-4"
              key={idx} // Unique key for each item
            >
              <Image
                src={item.img}
                alt={item.name}
                width={64} // Set a fixed width for consistent sizing
                height={64} // Set a fixed height for consistent sizing
                className="object-contain" // MODIFIED: Removed filter classes to show original colors
              />
              <span className="text-sm text-white mt-2 font-medium whitespace-nowrap">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
        {/* NEW: Bottom gradient line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-10" />
      </div>
    </div>
  );
};
