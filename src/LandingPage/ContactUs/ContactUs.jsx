import React from "react";
import contact from "./contact.svg"
import locate from "./locate.svg"
import mail from "./mail.svg"

function ContactUs({contactRef}) {
  return (
    <article ref={contactRef} className="flex flex-col items-center gap-8 pt-9">
      
      <h1 className="text-6xl font-bold text-black-1">ContactUs</h1>

      <section className="flex flex-wrap gap-14 justify-center">

        {/* BOX-1 */}
        <div className="w-60 flex flex-col items-center gap-2">
          <img src={locate} className="h-40" alt="" />
          <span className="text-4xl font-bold text-black-1">Locate us</span>
          <div>
            Room 410, Library Block 4th Floor, 
            NSUT Campus, Azad Hind Fauz Marg,
            Dwarka-3, New Delhi-110078
          </div>
        </div>

        {/* BOX-2 */}
        <div className="w-60 flex flex-col items-center gap-2">
          <img src={mail} className="h-40" alt="" />
          <span className="text-4xl font-bold text-black-1">Mail us</span>
          <div className="text-center">
            support.nsutiif@nsut.ac.in 
            connect.nsutiif@nsut.ac.in
            nsutiif@nsut.ac.in
          </div>
        </div>

        {/* BOX-3 */}
        <div className="w-60 flex flex-col items-center gap-2">
          <img src={contact} className="h-40" alt="" />
          <span className="text-4xl font-bold text-black-1">Call us</span>
          <div className="text-center">
            +91 8700528997 
            +91 9205475058
          </div>
        </div>

      </section>
    </article>
  );
}

export default ContactUs;
