import React, {useState, useEffect} from "react";
import ContactLinks from "../../UI/contactLinks/contactLinks";
import CV from "../../../CV - Nika Kochkiani.pdf";
import Button from "../../UI/Button/button";
import AboutMe from "./aboutMe/aboutMe";
import PageContent from "../../UI/pageContent/pageContent";

function About() {
  // const [count, setCount] = useState(0);
  // const [number02, setNumber02] = useState(0);
  // const [number12, setNumber12] = useState(0);
  // const [number22, setNumber22] = useState(0);
  // const [number32, setNumber32] = useState(0);

  const info = [
    {
      number: "2",
      content: "Projects Done",
      number2: null
    },
    {
      number: "3",
      content: "Ongoing Projects",
      number2: null
    },
    {
      number: "4",
      content: "Clients",
      number2: 100
    },
    {
      number: "0",
      content: "Cups of Coffee",
      number2: null
    },
  ];

  // console.log("efeqtamde");

  // let counterrs = 0;
  // for (let i = 2; i < info.length; i++) {
  //   console.log(info[i].number, count);
  //   useEffect(() => {
  //     console.log(info[i].number, count);
  //     if (count < +info[i].number) {
  //       // const interval = setInterval(() => {
  //         setCount(count => count + 1);
  //       // }, 1000); 
  //       // return (() => {
  //       //   clearInterval(interval)
  //       // }) 
  //     }
  //     info[i].number2 = count.toString();
  //   }, [count])
  //   console.log(info[i].number, count);
  // }

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
          <div className="font-semibold" key={item.number + item.content}>
            <h1 className="text-xl laptop:text-3xl mb-2">{item.number}</h1>
            <h2 className="text-base laptop:text-lg">{item.content}</h2>
          </div>
        ))}
        {/* <div className="font-semibold" key={info[3].number + info[3].content}>
          <h1 className="text-3xl mb-2">{count}</h1>
          <h2 className="text-lg">{info[3].content}</h2>
        </div>
        <div className="font-semibold" key={info[1].number + info[1].content}>
          <h1 className="text-3xl mb-2">{count}</h1>
          <h2 className="text-lg">{info[1].content}</h2>
        </div> */}
      </div>
    </PageContent>
  );
}

export default About;





// const [count, setCount] = useState(0);

// const info = [
//   {
//     number: "2",
//     content: "a",
//     number2: null
//   },
//   {
//     number: "4",
//     content: "b",
//     number2: null
//   }
// ];

// useEffect(() => {
//   info.map((item) => {
//     if (count < +item.number) {
//       const interval = setInterval(() => {
//         setCount(count => count + 1);
//       }, 1000); 
//       return (() => {
//         clearInterval(interval)
//       }) 
//     }
//     info.number2 = count;
//   })
//   info.number2 = count;
// }, [count])