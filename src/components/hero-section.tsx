import React from "react";

const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => (
  <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to</h1>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Phase Score Keeper
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        Keep track of your score in your favorite card game!
      </p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onGetStarted();
        }}
        className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </div>
  </section>
);

export default HeroSection;
