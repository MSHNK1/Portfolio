import React from "react";
import Button from "../../../UI/Button/button";
import './hire.css';

export default function Hire() {
  return (
    <div
      className="pt-20"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      // data-aos="fade-right"
      // // data-aos-offset="300"
      // data-aos-easing="ease-in-sine"
      >
      <h1 className="text-2xl tablet:text-3xl">Hire Me</h1>
      <div className="hire flex flex-col gap-8 tablet:gap-12 tablet:flex-row justify-between tablet:items-center">
        <p className="text-justify w-full">
          Based on my academic degree I was always excelled in Math and Physics. Hence, I possess good fast learning, logical and analytical skills. Last two years I formed a strong attachment to web development. With the guide of diverse online courses I managed to learn basics on my own. I keep acquiring a comprehensive knowledge in the field. My assertiveness and passion for the industry paved the way for such a rapid success. A few months after starting my studies, I started working at "SoftChef". I constantly embrace challenges and believe that through hard work and perseverance everything is achievable.
        </p>
        <a href="#Contact" aria-label="Button to scroll to Contact's section">
          <Button btnType=" touch">Get In Touch</Button>
        </a>
      </div>
    </div>
  );
};