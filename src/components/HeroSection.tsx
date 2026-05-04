import React from "react";

const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => (
    <div className="min-h-screen flex items-center justify-center px-4">
        <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 underline decoration-[3px] underline-offset-[10px]">
                Phase Score Keeper
            </h1>
            <p className="text-lg md:text-2xl text-white mb-10">
                Keep track of your score in your favorite card game!
            </p>
            <button
                onClick={onGetStarted}
                className="btn-primary px-10 py-3 rounded-full"
            >
                Get Started
            </button>
        </div>
    </div>
);

export default HeroSection;
