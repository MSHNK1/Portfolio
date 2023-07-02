import React from "react";
import ContactLinks from "../../UI/contactLinks/contactLinks";
import CV from "../../../Nika Kochkiani CV.pdf";
import Button from "../../UI/Button/button";
import AboutMe from "./aboutMe/aboutMe";
import PageContent from "../../UI/pageContent/pageContent";
import NumberCounter from "./numberCounter";

function About() {
  const info = [
    {
      number: "3",
      content: "Projects Done",
    },
    {
      number: "1",
      content: "Ongoing Projects",
    },
    {
      number: "3",
      content: "Clients",
    },
    {
      number: "0",
      content: "Cups of Coffee",
    },
  ];

  return (
    <PageContent idTp="About" classTp="gap-20 tablet:flex-row justify-between" styleTp={{backgroundColor: "#f2f2f2"}}>
      <div className="tablet:w-6/12">
        <AboutMe />
        <ContactLinks />
        <a href={CV} download aria-label="Download my CV">
          <Button btnType=" download">My Resume <i className="fa fa-download"></i></Button>
        </a>
      </div>

      <div className="tablet:w-5/12 grid grid-cols-2 my-auto gap-y-8">
        {info.map((item) => (
          <NumberCounter key={item.number + item.content} number={item.number} content={item.content} />
        ))}
      </div>
    </PageContent>
  );
}

export default About;

