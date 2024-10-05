import React from "react";

function AboutUs({aboutRef}) {
  return (
    <article ref={aboutRef} className="flex flex-col items-center bg-blue-1 p-10 mt-6">
      <div className="text-5xl font-bold text-black-1 text-center py-10">About Us</div>
      <p className="w-[700px] text-xl max-md:w-[500px] max-sm:w-[350px] text-center">
        <strong>NSUT INCUBATION & INNOVATION FOUNDATION (NSUT-IIF)</strong> a section 8 company
        as per The Companies Act-2013 having its registered office at Netaji
        Subhas University of Technology, Azad Hind Fauz Marg, Sector 3, Dwarka
        New Delhi, was opened to incubate startups of NSUT students, alumni,
        faculty of NSUT, any other incubatee under the guidelines of Delhi
        Government at NSUT for two years with seed money (funding) from the
        NSUT-IIF.
      </p>
    </article>
  );
}

export default AboutUs;
