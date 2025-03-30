"use client";
import * as React from "react";
import { FeaturesHeader } from "./FeaturesHeader";
import Marquee from "react-fast-marquee";

function Features() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const images = [
    "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1743316668/fj6bjyagrowcodvj5crb.svg",
    "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1743316668/uadwdj4clhxwfu62l9b1.svg",
  ];

  return (
    <section className="overflow-hidden text-5xl font-bold leading-snug text-center text-white whitespace-nowrap max-md:text-4xl">
      <div className="flex flex-col pt-0 w-full bg-zinc-950 max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <FeaturesHeader />
        <div className="mt-5 mb-0 max-md:mt-10 max-md:mb-2.5">
          <Marquee
            speed={isMobile ? 100 : 300}
            gradient={false}
            direction="left"
            pauseOnHover={true}
          >
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex">
                {images.map((src, index) => (
                  <img
                    key={`${set}-${index}`}
                    src={src}
                    alt={`Features illustration ${index + 1}`}
                    className={`object-contain h-[624px] ${
                      index === 0 ? "mr-14" : "-ml-24 -mr-10"
                    }`}
                  />
                ))}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Features;
