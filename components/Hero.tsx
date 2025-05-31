import { FaLocationArrow, FaDownload } from "react-icons/fa6"; // Import FaDownload for the resume button
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image"; // Ensure Image is imported if you use it for the profile pic
import { motion } from "framer-motion"; // Import motion for animations

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* REMOVED: New Header "Akshat" with Animation and Effect */}
      {/* The motion.div containing the Akshat header has been removed */}

      {/* Purple and Pink Spotlight Effects */}
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

      {/* Background with Grid Image - REFERENCED FROM FOOTER */}
      {/* This div now acts as the container for the grid image, similar to footer */}
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center z-0">
  <Image
    src="/footer-grid.svg" // Path to your grid SVG
    alt="background grid"
    fill  // updated prop, no value
    style={{ objectFit: 'cover' }}  // new way to handle objectFit
    className="opacity-60 mix-blend-screen" // Adjusted opacity for visibility
    priority // Prioritize loading for LCP
  />
  {/* Radial Gradient for Fade Effect - Kept for consistency with original Hero */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
</div>


      {/* Content Section - Adjusted for left alignment and picture box */}
      {/* This container uses flexbox to arrange items. On small screens (default), it's a column (flex-col)
          with items centered (items-center) and content centered (justify-center).
          On medium screens and up (md:), it becomes a row (md:flex-row) with items aligned to the start (md:items-start)
          and space distributed between them (md:justify-between). */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[80vw] flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-4 md:gap-8"> {/* MODIFIED: Changed gap-8 to gap-4 for mobile */}
          {/* Text and Buttons Column */}
          {/* This column also uses flexbox to stack its contents. On mobile, items are centered (items-center)
              and text is centered (text-center). On medium screens and up, items align to the start (md:items-start)
              and text aligns to the left (md:text-left). */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            {/* Name - Combined into one TextGenerateEffect for unified shade effect */}
            <TextGenerateEffect
              words="Akshat Srivastava"
              // Applied gradient classes directly to TextGenerateEffect
              className="text-[50px] md:text-6xl lg:text-7xl font-extrabold {/* MODIFIED: Increased font sizes */}
                         bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                         bg-clip-text text-transparent drop-shadow-2xl
                         animate-text-glow" // ADDED: text-glow animation for subtle pulse
            />

            {/* Title/Profession - Combined into one TextGenerateEffect for unified animation */}
            <div className="mt-2 whitespace-nowrap"> {/* Removed flex-wrap, justify-center/start as it's now one block */}
              <TextGenerateEffect
                words="Software Engineer | Web Developer | Machine Learning and AI"
                className="text-[18px] md:text-xl lg:text-2xl text-white font-semibold" // Removed mr-1 as it's one string
              />
            </div>

            {/* Personal Description - ADDED gradient effect */}
            <p className="text-center md:text-left text-sm md:text-base lg:text-lg mt-4 max-w-lg font-light
                           bg-gradient-to-r from-[#E0BBE4] via-[#FFC0CB] to-[#E0BBE4] bg-clip-text text-transparent
                           drop-shadow-sm"> {/* Added a subtle drop shadow for definition */}
              I&apos;m a passionate software developer and Computer Science student at VIT Vellore. I specialize in full-stack development and AI/ML, with hands-on experience building scalable platforms and intelligent systems. I enjoy solving real-world problems through code and continuously learning new technologies.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              {/* Show my work Button - MODIFIED variant and otherClasses */}
              <a href="#about">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                  variant="default"
                  otherClasses="bg-black hover:bg-white/10 transition-colors duration-300"
                />
              </a>

              {/* My Resume Button - MODIFIED variant and otherClasses */}
              <a href="/resume.pdf" download="resume.pdf">
                <MagicButton
                  title="Resume"
                  icon={<FaDownload />}
                  position="left"
                  variant="default"
                  otherClasses="bg-black hover:bg-white/10 transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          {/* Picture Box - MODIFIED for larger size and beautiful glow */}
          {/* The outermost div now acts as the gradient "border" directly. */}
          <div className="relative w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center rounded-lg overflow-hidden shadow-2xl {/* MODIFIED: Changed rounded-xl to rounded-lg */}
                           bg-gradient-to-br from-purple-700 via-pink-500 to-purple-800">
            {/* Inner div for the actual image, slightly smaller to reveal the gradient as a border */}
            <div className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-md overflow-hidden bg-black flex items-center justify-center"> {/* MODIFIED: Changed rounded-lg to rounded-md */}
              {/* Placeholder for your picture. Replace '/placeholder-profile.jpg' with your actual image path.
                  Place your image in the 'public' directory (e.g., public/my-profile-pic.jpg) */}
              <Image
                src="/placeholder-profile.jpg" // Replace with your image path (e.g., /your-profile-pic.jpg)
                alt="Akshat Srivastava Profile"
                width={384} // Updated width to match lg:w-96 (96 * 4 = 384)
                height={384} // Updated height to match lg:h-96
                className="w-full h-full object-cover rounded-md transition-all duration-300 ease-in-out"
                style={{
                  // MODIFIED: Added a second box-shadow for a pink glow effect
                  boxShadow: "0 0 30px 10px rgba(147, 51, 234, 0.6), 0 0 40px 15px rgba(236, 72, 153, 0.5)", // Purple and Pink glow
                }}
                priority // Prioritize loading for LCP
              />
            </div>
          </div>
        </div>
      </div>
      {/* REMOVED: About Me heading from Hero.tsx */}
    </div>
  );
};

export default Hero;
