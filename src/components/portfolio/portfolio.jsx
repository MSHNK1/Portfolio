import React from "react";
import Projects from "./projects/projects";
import Hire from "./hire/hire";
import PageContent from "../../UI/pageContent/pageContent";

function Portfolio() {
  return (
    <PageContent idTp="Portfolio" classTp="" styleTp={{backgroundColor: "#f2f2f2"}}>
      <Projects />
      <Hire />
    </PageContent>
  );
}

export default Portfolio;
