import React from "react";

const PlanCard = ({
  type,
  price,
  description,
  messages,
  chatbots,
  model,
  files,
  support,
  isFirst,
  isPopular,
  isMonthly,
}) => {
  const features = [
    { label: type, isTitle: true },
    { label: description, isDescription: true },
    { label: price, isPrice: true },
    { label: messages },
    { label: chatbots },
    { label: model },
    { label: files },
    { label: support },
  ];

  return (
    <article
      className={`relative flex flex-col gap-12 px-12 py-16 rounded-3xl w-[280px] max-md:w-full max-md:max-w-[400px] max-sm:px-5 max-sm:py-10 ${
        !isPopular ? "bg-gray-400 bg-opacity-10" : ""
      }`}
      style={
        isPopular
          ? {
              background:
                "linear-gradient(164.44deg, #209AD2 -0.75%, #FFA255 99.26%)",
            }
          : { background: "#97A1B01A" }
      }
    >
      {isPopular && (
        <div
          className={`absolute inset-x-0 top-0 p-3 text-xl font-semibold text-center rounded-[25px_25px_0_0] text-zinc-950 ${
            isPopular ? "bg-[#ffffff20]" : "bg-white bg-opacity-20"
          }`}
        >
          Popular Plan
        </div>
      )}
      <div className="flex flex-col gap-6 items-center">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            {feature.isTitle && (
              <h2 className="text-xl font-semibold text-white">
                {feature.label}
              </h2>
            )}
            {feature.isDescription && !isFirst && (
              <p className="text-base text-white">{feature.label}</p>
            )}
            {feature.isPrice &&
              (!isFirst ? (
                <div className="text-center text-white">
                  <span className="text-4xl font-bold">${feature.label}</span>
                  <span className="text-xl font-semibold">/mo</span>
                </div>
              ) : (
                <>
                  <div className="text-center text-white mt-12">
                    <span className="text-4xl font-bold">Pricing</span>
                  </div>
                </>
              ))}
            {feature.isPrice && (
              <button
                style={{
                  opacity: isFirst ? 0 : 1,
                  visibility: isFirst ? "hidden" : "visible",
                }}
                className="px-8 mt-[50px] py-4 text-xl bg-white cursor-pointer rounded-[35px] text-zinc-950 border-2 border-transparent hover:bg-transparent hover:border-white hover:text-white transition-all duration-300"
              >
                Try for Free
              </button>
            )}
            {!feature.isTitle && !feature.isDescription && !feature.isPrice && (
              <p className="text-lg text-white">
                {isFirst ? feature.label : feature.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default PlanCard;
