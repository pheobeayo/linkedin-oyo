import React from "react";


export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const[phonenumber, setPhonenumber]=React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, phonenumber, message }),
    })
      .then(() => alert("You are successfully registered!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">

      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="py-10 px-10 flex flex-col  bg-blue-900 rounded-xl shadow-lg space-y-2 md:py-6  md:items-center md:space-y-0 md:space-x-8">
        <h2 className="text-white md:text-6xl text-5xl mb-1 font-large title-font">
          Register Now!
        </h2>
        <p className="leading-relaxed mb-5">
          Do you want to be part of the budding Connection?
          <br className="hidden lg:inline-block" />
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Phone Number
          </label>
          <input
            type="phonenumber"
            id="phonenumber"
            name="phonenumber"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="register"
          className="text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
          Register
        </button>
      </form>
    </section>
  );
}