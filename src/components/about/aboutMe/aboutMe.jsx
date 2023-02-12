import React from "react";

export default function AboutMe() {
  return (
    <article>
      <h1 className="font-bold text-xl tablet:text-2xl laptop:text-4xl mb-5">Hello, I am Nika</h1>
      <h2 className="font-semibold text-lg tablet:text-xl laptop:text-2xl mb-3">
        Front-End (React) Developer
      </h2>
      <p className="text-justify text-sm tablet:text-base laptop:text-lg mb-3">
        with a strong scientific background, about one-year experience
        and strong two-way communication in English (IELTS valid Academic
        Certification).
      </p>
      <p className="text-justify text-xs tablet:text-sm laptop:text-base mb-5">
        Past experience: Power Systems Engineer with 2-year working experience
        in Georgian State Electrosystem using various software tools{" "}
        <i>(PSS/E, PowerFactory, PLEXOS)</i> and programming languages{" "}
        <i>(Python, MATLAB)</i>.
      </p>
    </article>
  );
}
