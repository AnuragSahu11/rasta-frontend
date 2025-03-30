import React from "react";

const DeliveryImageSection = () => {
  return (
    <article className="flex flex-1 my-auto justify-center items-center">
      <iframe
        src="https://www.youtube.com/embed/_Q2F3LyWDaE?si=zdEcUcbVhI-NcChl"
        title="YouTube video player"
        className="border border-solid border-slate-50 h-[339px] rounded-[30px] w-[548px] max-md:w-full max-md:h-auto max-md:max-w-[548px]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      />
    </article>
  );
};

export default DeliveryImageSection;
