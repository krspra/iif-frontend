import React from "react";
import SignupButton from "../../Components/SignupButton";
import academic from "./academic.svg"
import finance from "./finance.svg"
import learning from "./learning.svg"
import mentorship from "./mentorship.svg"
import networking from "./networking.svg"
import pitch from "./pitch.svg"
import techsupport from "./techsupport.svg"

function Home({ homeRef }) {
  return (
    <div ref={homeRef} className="pb-10 bg-custom-gradient flex flex-col gap-24 items-center">
      <article className="flex justify-around max-sm:flex-col max-sm:items-center">
        <section className="h-[340px] w-1/3 flex flex-col justify-around max-sm:w-4/5">
          <div className="text-6xl font-bold max-custom2:text-5xl max-md:text-4xl max-sm:text-5xl">
            Convert Your Ideas Into Reality.
          </div>
          <div className="font-bold text-lg text-black-1 max-custom2:text-base max-md:text-sm max-sm:text-lg">
            We are dedicated to <span className="text-red-400">empowering</span>{" "}
            innovative startups by providing them{" "}
            <span className="text-red-400">funding</span>,{" "}
            <span className="text-red-400">mentorship</span>, and a{" "}
            <span className="text-red-400">platform</span> to showcase their
            ideas.
          </div>
          <SignupButton />
        </section>
        <img
          src={pitch}
          alt="pitching svg image"
          className="h-64 max-md:h-52"
        />
      </article>

      <article className="flex justify-around w-3/4 gap-16 flex-wrap"> 
        <div>
          <img src={academic} alt="" className="h-28 w-28" />
          <div className="text-center text-white text-lg">Academic Support</div>
        </div>
        <div>
          <img src={finance} alt="" className="h-28 w-28" />
          <div className="text-center text-white text-lg">Financial Assitance</div>
        </div>
        <div>
          <img src={learning} alt="" className="h-28 w-28"/>
          <div className="text-center text-white text-lg">Hands-on Learning</div>
        </div>
        <div>
          <img src={mentorship} alt="" className="h-28 w-28"/>
          <div className="text-center text-white text-lg">Mentorship</div>
        </div>
        <div>
          <img src={networking} alt="" className="h-28 w-28"/>
          <div className="text-center text-white text-lg">Networking</div>
        </div>
        <div>
          <img src={techsupport} alt="" className="h-28 w-28"/>
          <div className="text-center text-white text-lg">Tech Support</div>
        </div>
      </article>
    </div>
  );
}

export default Home;
