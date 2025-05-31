"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import type { LottieProps } from "lottie-react";

// Dynamically import LottieWrapper with props typing
const Lottie = dynamic<LottieProps>(() => import("./LottieWrapper"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("akshatsrivastava11d@gmail.com")
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.warn("Clipboard API not available.");
    }
  };

  const gradientTextStyle = {
    backgroundImage: "linear-gradient(to right, #A78BFA, #F472B6, #A78BFA)",
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    backgroundClip: "text" as const,
    color: "transparent" as const,
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{ background: "black" }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={typeof img === "string" ? img : "image"}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={typeof spareImg === "string" ? spareImg : "spare image"}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-purple-400 font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {description && (
            <div
              className="font-sans font-extralight text-sm md:text-xs lg:text-base z-10"
              style={gradientTextStyle}
            >
              {description}
            </div>
          )}
          {title && (
            <div
              className="font-sans text-lg lg:text-3xl font-bold z-10"
              style={gradientTextStyle}
            >
              {title}
            </div>
          )}

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base text-purple-200 bg-[#2A1544] rounded-lg text-center"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 bg-[#2A1544] rounded-lg"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 bg-[#2A1544] rounded-lg"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base text-purple-200 bg-[#2A1544] rounded-lg text-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    style={{ height: 200, width: 400 }}
                  />
                </div>
              )}
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#2A1544] text-purple-200 hover:text-purple-100"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
