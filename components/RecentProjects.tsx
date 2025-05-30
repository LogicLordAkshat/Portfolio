import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image"; // Import the Image component

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 bg-black text-white relative"> {/* MODIFIED: Added id="projects" */}
      {/* Background grid - REFERENCED FROM FOOTER */}
      <div className="w-full h-full absolute top-0 left-0 z-0 overflow-hidden"> {/* Adjusted for full height of section */}
        <Image
          src="/footer-grid.svg" // Path to your grid SVG
          alt="background grid"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Covers the area without distortion
          className="opacity-80 mix-blend-screen" // Matching opacity and blend mode from Footer
          priority // Prioritize loading for LCP
        />
      </div>

      <h1 className="heading text-center relative z-10"> {/* Added relative z-10 to keep heading above grid */}
        Few of my{" "}
        {/* Applied gradient classes for the heading */}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Recent Projects
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 relative z-10"> {/* Added relative z-10 to keep content above grid */}
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer
              title="https://github.com/LogicLordAkshat"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="object-cover w-full h-full" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  {/* Applied gradient classes for "Check Live Site" */}
                  <p className="flex lg:text-xl md:text-xs text-sm font-semibold
                                bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Check Live Site
                  </p>
                  {/* Changed FaLocationArrow color to a specific purple shade */}
                  <FaLocationArrow className="ms-3" color="#A78BFA" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
