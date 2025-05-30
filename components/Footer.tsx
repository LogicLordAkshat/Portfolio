import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data"; // Make sure socialMedia in data.ts includes links
import MagicButton from "./MagicButton";
import Image from "next/image"; // Import the Image component
import { Spotlight } from "./ui/Spotlight";
const Footer = () => {
  return (
    <footer className="w-full pt-0 pb-10 bg-black text-white relative z-10" id="contact"> {/* MODIFIED: Changed pt-10 to pt-0 */}
      {/* background grid - UPDATED TO USE NEXT.JS IMAGE */}
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
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-0">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill" // Ensures the image covers the container
          objectFit="cover" // Covers the area without distortion
          className="opacity-80 mix-blend-screen" // Adjusted opacity from 0.6 to 0.8 for more visibility
          priority // Prioritize loading for LCP (optional, but good for consistency)
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take{" "}
          {/* MODIFIED: Applied gradient text effect to "your" */}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            your
          </span>{" "}
          digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:akshatsrivastava11d@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10 px-6">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          {/* MODIFIED: Updated copyright and "Built with passion" text with gradient for name */}
          &copy; 2025{" "}
          
          . All rights reserved.
          <br className="md:hidden" /> {/* Line break for mobile */}
          Built with passion &mdash;{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
            Akshat Srivastava
          </span>
          .
        </p>

        {/* Social Media Icons - Now includes Instagram and links */}
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link} // Use info.link for the href
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt="icons"
                width={20}
                height={20}
                // MODIFIED: Applied filter for purple tint
                className="filter brightness-0 invert sepia(1) hue-rotate(270deg) saturate(500%)"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
