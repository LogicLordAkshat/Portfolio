"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* MODIFIED: Changed background colors to black/transparent black */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-black/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-black/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="heading text-center mb-16">
          Kind words from
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            {" "}satisfied clients
          </span>
        </h1>

        <div className="flex flex-col items-center">
          {/* Testimonials Section */}
          <div className="w-full h-[50vh] md:h-[30rem] rounded-3xl relative">
            {/* MODIFIED: Changed gradient overlay to black/transparent black */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/90 to-black pointer-events-none rounded-3xl" />
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              className="[&>div>ul>li]:bg-black [&>div>ul>li]:border-white/[0.1]
                         [&>div>ul>li:hover]:border-white/[0.2] [&>div>ul>li]:backdrop-blur-md
                         [&>div>ul>li]:shadow-lg [&>div>ul>li]:shadow-black/50" // Adjusted border and shadow for black cards
            />
          </div>

          {/* Companies Section - REMOVED */}
          {/* The entire div containing the companies section has been removed */}

        </div>
      </div>
    </section>
  );
};

export default Clients;
