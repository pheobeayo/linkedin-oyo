
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { teamleads } from "../data";

export default function Teamlead() {
  return (
    <section id="teamleads" className="text-gray-400 bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Meet Our Team Leads
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Their antecedents preceed them
          </p>
        </div>
        <div className="flex flex-wrap -w-4">
          {teamleads.map((teamleads) => (
            
              <div className="flex w-1/3 flex-wrap relative justify-center  p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-1/2 w-full rounded-lg object-cover object-center"
                  src={teamleads.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    {teamleads.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {teamleads.title}
                  </h1>
                 
                </div>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}