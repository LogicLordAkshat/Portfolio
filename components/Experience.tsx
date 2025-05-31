import React from "react";
import Image from "next/image"; // Import the Image component
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { Spotlight } from "./ui/Spotlight";
const Experience = () => {
  return (
    <div className="py-0 w-full bg-black text-white relative"> {/* MODIFIED: Changed py-4 to py-0 to move it further up */}
      {/* Background grid - REFERENCED FROM FOOTER/RECENTPROJECTS */}
      <div>
              <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="#8B5CF6" // Violet-500 (Purple)
              />
              <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="#EC4899" // MODIFIED: Changed to Pink-500 for a pink effect
              />
              <Spotlight
                className="left-80 top-28 h-[80vh] w-[50vw]"
                fill="#4C1D95" // Violet-900 (Deep Purple)
              />
            </div>
      <div className="w-full h-full absolute top-0 left-0 z-0 overflow-hidden">
  <Image
    src="/footer-grid.svg"
    alt="background grid"
    fill  // replaces layout="fill"
    style={{ objectFit: 'cover' }}  // replaces objectFit="cover"
    className="opacity-80 mix-blend-screen"
    priority
  />
</div>


      <h1 className="heading relative z-10"> {/* Added relative z-10 to keep heading above grid */}
        My <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">work experience</span> {/* MODIFIED: Applied gradient text effect */}
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 relative z-10"> {/* Added relative z-10 to keep content above grid */}
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              // MODIFIED: Changed background and background-color to use black
              background: "rgb(0,0,0)", // Solid black fallback
              backgroundColor:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)", // Gradient from black to slightly less black
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white border-neutral-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 object-contain"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-gray-300 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
