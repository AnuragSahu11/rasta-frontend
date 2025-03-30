import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import MainLayout from "../../components/layout/MainLayout";
import RastaaServices from "./components/raastaServices/RastaaServices";
import PricingPlans from "./components/pricingPlans/PricingPlans";
import FaqSection from "./components/faq/FaqSection";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/footer/Footer";
import Navigation from "./components/hero/Navigation";
import HeroSection from "./components/hero/heroSection";
import XlWrapper from "../../components/layout/Wrapper";
import Features from "./components/features/Features";

const Home = () => {
  const [showButton, setShowButton] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = React.useCallback(() => {
    if (isMobile) {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > window.innerHeight);
    }
  }, [isMobile]);

  React.useEffect(() => {
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile, handleScroll]);

  const sections = [
    <HeroSection key="hero" />,
    <XlWrapper key="services">
      <RastaaServices />
    </XlWrapper>,
    <Features key="features" />,
    <XlWrapper key="pricing">
      <PricingPlans />
    </XlWrapper>,
    <XlWrapper key="faq">
      <FaqSection />
    </XlWrapper>,
    <XlWrapper key="contact">
      <ContactForm />
    </XlWrapper>,
    <Footer key="footer" />,
  ];

  return (
    <MainLayout>
      <button
        className={`fixed rounded-[35px] left-[50%] -translate-x-1/2 z-10 text-white bottom-[29px] px-[30px] py-[15px] bg-[#4D8FAE] border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 ${
          showButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Try For Free
      </button>
      {isMobile ? (
        <div className="overflow-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`min-h-screen ${
                index === sections.length - 1 ? "h-auto" : ""
              }`}
            >
              {section}
            </div>
          ))}
        </div>
      ) : (
        <ReactFullpage
          scrollingSpeed={1000}
          navigation={true}
          navigationPosition="right"
          navigationTooltips={[
            "Hero",
            "Services",
            "Features",
            "Pricing",
            "FAQ",
            "Contact",
            "Footer",
          ]}
          showActiveTooltip={true}
          afterLoad={(origin, destination) => {
            setShowButton(destination.index > 0);
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`section ${
                      index === sections.length - 1 ? "fp-auto-height" : ""
                    }`}
                  >
                    {section}
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
    </MainLayout>
  );
};

export default Home;
