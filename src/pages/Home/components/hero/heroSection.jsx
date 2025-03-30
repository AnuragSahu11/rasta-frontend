import React from "react";
import Navigation from "./Navigation";

const HeroSection = () => {
  return (
    <>
      <Navigation />
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-[60%_50%] lg:object-center object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/lucidui-cl-a/video/upload/v1743267744/dncqguzgt25ptmebb7um.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to make text more readable */}

        {/* Content */}
      </div>
    </>
  );
};

export default HeroSection;
