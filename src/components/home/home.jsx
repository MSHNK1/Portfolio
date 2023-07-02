import React from "react";
import Typed from "react-typed";
import PageContent from "../../UI/pageContent/pageContent";
import "./home.css";
import bg from "../../assets/images/bgp.jpg";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";
import { ParallaxBannerLayer } from "react-scroll-parallax";

function Home() {
  return (
    // <ParallaxBanner layers={[{ image: { bg }, speed: 20 }]} className="backGround">
    <ParallaxProvider>
      <div className="backGround">
        <ParallaxBanner layers={[{image: {bg}, speed: -30}]}>
          <PageContent idTp="Home" classTp="justify-center text-center h-screen" style={{height: "100%"}}>
            <Parallax speed={-20}>
              <div>
                <h1 className="text-xl laptop:text-5xl mb-5 animate__animated animate__zoomInDown">
                  Hi, I'm Nika Kochkiani
                </h1>
                <h2 className="text-sm laptop:text-2xl animate__animated animate__zoomInUp">
                  <Typed
                    cursor={true}
                    typeSpeed={100}
                    backSpeed={60}
                    strings={["Front-End", "React"]}
                    loop
                  />{" "}
                  Developer
                </h2>
              </div>
            </Parallax>
          </PageContent>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
    // </ParallaxBanner>

    // <ParallaxProvider>
    //       <Parallax translateY={[-50, 100]} className="h-full" style={{backgroundColor: "green", height: "100vh"}}>
    //           <div className="text-9xl">
    //               <h1>Development</h1>
    //               <h1>process</h1>
    //           </div>
    //       </Parallax>
    // </ParallaxProvider>
  );
}

export default Home;

{
  /* <PageContent idTp="Home" classTp="backGround justify-center text-center">
  <div>
    <h1 className="text-xl laptop:text-5xl mb-5 animate__animated animate__zoomInDown">
      Hi, I'm Nika Kochkiani
    </h1>
    <h2 className="text-sm laptop:text-2xl animate__animated animate__zoomInUp">
      <Typed
        cursor={true}
        typeSpeed={100}
        backSpeed={60}
        strings={["Front-End", "React"]}
        loop
        />{" "}
      Developer
    </h2>
  </div>
</PageContent> */
}




{/* <PageContent idTp="Home" classTp="backGround justify-center text-center">
  <Parallax speed={-5}>
    <div>
      <h1 className="text-xl laptop:text-5xl mb-5 animate__animated animate__zoomInDown">
        Hi, I'm Nika Kochkiani
      </h1>
      <h2 className="text-sm laptop:text-2xl animate__animated animate__zoomInUp">
        <Typed
          cursor={true}
          typeSpeed={100}
          backSpeed={60}
          strings={["Front-End", "React"]}
          loop
        />{" "}
        Developer
      </h2>
    </div>
  </Parallax>
</PageContent> */}