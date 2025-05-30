"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

interface TextGenerateEffectProps {
  words: string;
  className?: string; // For styling the outer container div
  wordClassName?: string; // For styling individual words (e.g., gradient, color)
}

// Define variants for the staggered word animation
const wordVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0, // Staggered delay for each word
      duration: 0, // Animation duration for each word
    },
  }),
};

export const TextGenerateEffect = ({
  words,
  className,
  wordClassName,
}: TextGenerateEffectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // useInView to trigger animation when the component enters the viewport
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% of the element is in view

  // Split words into an array once
  const wordsArray = words.split(" ");

  return (
    <div className={cn(className)}>
      <motion.div
        ref={ref}
        className="flex flex-wrap items-center"
        initial="hidden" // Set initial state for all children to 'hidden'
        animate={isInView ? "visible" : "hidden"} // Animate to 'visible' when in view
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn(wordClassName)} // Apply word-specific classes (including gradient and text-transparent)
            variants={wordVariants} // Link to the defined variants
            custom={idx} // Pass the index as a custom prop for staggered animation
            // REMOVED: Explicit inline style for WebkitBackgroundClip, WebkitTextFillColor, and color.
            // These properties should now be handled by the Tailwind classes passed via wordClassName.
          >
            {word}&nbsp; {/* Add a non-breaking space after each word */}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
