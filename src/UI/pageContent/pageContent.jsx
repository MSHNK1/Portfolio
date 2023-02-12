import React from "react";

function PageContent(props) {
  return (
    <div
      id={props.idTp}
      className={`pageContent ${props.classTp} py-20 tablet:py-30 px-4 laptop:px-32 flex flex-col`}
      style={props.styleTp}
    >
      {props.children}
    </div>
  );
}

export default PageContent;