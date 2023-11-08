import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="text-left flex items-center justify-center flex-wrap p-6 lg:py-4 lg:px-16">
        <div className="flex flex-col gap-4 max-w-[50%]">
          <h3 className="text-3xl lg:text-5xl font-bold">
            Generate <span className="text-orange">New</span>
            <br />
            Digital Cooperation <br />
          </h3>
          <p className="lg:text-lg">
            We design and build solutions by connecting ideas and technologhy to
            solve problems and get new ideas to business lifecycle.
          </p>
          <button className="bg-orange py-2 px-4 rounded-full w-fit">
            Get Started
          </button>
        </div>
        <img src="./hero1.png" alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
