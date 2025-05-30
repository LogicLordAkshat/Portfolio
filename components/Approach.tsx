import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { cn } from "@/lib/utils"; // Ensure cn utility is imported

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My{" "}
        {/* MODIFIED: Applied gradient text effect to "approach" */}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          approach
        </span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // MODIFIED: Changed containerClassName to green shade
            containerClassName="bg-green-900 rounded-3xl overflow-hidden"
            // MODIFIED: Changed colors to green/yellow tones
            colors={[
              [34, 197, 94],   // green-500
              [163, 230, 53],  // lime-400
              [21, 128, 61],   // green-800
            ]}
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // MODIFIED: Changed containerClassName to yellow shade
            containerClassName="bg-yellow-900 rounded-3xl overflow-hidden"
            colors={[
              // MODIFIED: Changed colors to yellow/green tones
              [250, 204, 21],   // yellow-400
              [253, 224, 71],  // yellow-300
              [161, 98, 7],    // amber-800
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // MODIFIED: Changed containerClassName to red shade
            containerClassName="bg-red-900 rounded-3xl overflow-hidden"
            // MODIFIED: Changed colors to red tones for consistency
            colors={[
              [239, 68, 68],   // red-500
              [252, 165, 165], // red-300
              [153, 27, 27],   // red-800
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
        dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        // MODIFIED: Changed background to a dark purple gradient
        background: "rgb(0,0,0)", // Pure black fallback
        backgroundColor:
          "linear-gradient(90deg, rgba(5,0,10,1) 0%, rgba(15,0,25,1) 100%)", // Gradient from very dark black-purple to slightly less dark black-purple
        borderRadius: `calc(1.75rem* 0.96)`,
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      {/* MODIFIED: Changed icon colors to purple-400 */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-purple-400 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-purple-400 opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-purple-400 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-purple-400 opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // MODIFIED: Conditional text color for titles
          className={cn(
            "dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100",
            "relative z-10 mt-4 font-bold group-hover/canvas-card:text-pink-300",
            "group-hover/canvas-card:-translate-y-2 transition duration-200",
            title === "Planning & Strategy" ? "text-green-500" :
            title === "Development & Launch" ? "text-yellow-500" : "text-white" // Default to white if not green/yellow
          )}
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          // MODIFIED: Text color for description to white
          style={{ color: "#FFFFFF" }} // Changed to pure white
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          // MODIFIED: Conic gradient colors to purple/pink
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#EC4899_50%,#E2CBFF_100%)]"
        />
        <span
          // MODIFIED: Background color to black, text color to white, removed gradient text classes
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-black px-5 py-2 text-white backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
