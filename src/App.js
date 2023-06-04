import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import Teamlead from "./components/Teamlead";
import Mentors from "./components/Mentors";

export default function App() {
  return (
    <main className="text-gray-400 bg-white-900 body-font">
      <Navbar />
      <About />
      <Mentors/>
      <Teamlead />
      <Topics />
      <Contact />
    </main>
  );
}
