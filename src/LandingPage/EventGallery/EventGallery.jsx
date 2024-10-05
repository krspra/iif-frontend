import React from "react";
import E1 from "./iifEvent1.jpg"
import E2 from "./iifEvent2.jpg"
import E3 from "./iifEvent3.jpg"
import E4 from "./iifEvent4.jpg"

function EventGallery({ eventRef }) {
  return (
      <div ref={eventRef}>
        <div className="text-5xl font-bold text-black-1 text-center py-10">
          Event Gallery
        </div>
        <div className="flex flex-col items-center gap-8">
          <img
            src={E1}
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
          <img
            src={E2}
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
          <img
            src={E3}
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
          <img
            src={E4}
            alt=""
            className="h-96 w-[700px] max-md:w-[500px] max-md:h-80 max-sm:w-[350px] max-sm:h-60 rounded-xl"
          />
        </div>
      </div>
  );
}

export default EventGallery;
