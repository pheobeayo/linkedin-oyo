import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-blue-600">
            This is LinkedIn Local Oyo
          </h1>
          <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-grey-700">
            Presenting........
          </h2>
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-blue-600">
            Ignite: Unleashing Creative  brilliance for innovation!
          </h1>
          <p className="mb-8 leading-relaxed">
            Do you need help Building Intentional connections?
            <br className="hidden lg:inline-block text-black" />
            LinkedIn-local Oyo is intentional about facilitating capacity-building
            and relationship-building among professionals.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              Let's Connect
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="logo"
            src="./logo.png"
          />
        </div>
      </div>
    </section>
  );
}