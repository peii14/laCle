import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import autumn from "../Animation/autumn.json";
import spring from "../Animation/spring.json";
import summer from "../Animation/summer.json";
import winter from "../Animation/winter.json";
import Neuromorphism from "./Neuromorphism";

const Season = (props: any) => {
  const container = useRef(null);
  var animate: any = [];
  var content;
  if (props.status == 1) {
    animate.push(winter);
    content = "Winter";
  } else if (props.status == 2) {
    animate.push(summer);
    content = "Summer";
  } else if (props.status == 3) {
    animate.push(spring);
    content = "Spring";
  } else if (props.status == 4) {
    animate.push(autumn);
    content = "Autumn";
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animate[0],
    });
    return () => {
      lottie.destroy();
    };
  }, [animate]);
  return (
    <div
      className="cursor-pointer h-full"
      onMouseEnter={() => {
        lottie.setDirection(1);
        lottie.play();
      }}
      onMouseLeave={() => {
        lottie.setDirection(-1);
        lottie.play();
      }}
    >
      <Neuromorphism isMember={2}>
        <div className="w-8/12 flex m-auto " ref={container} />
        <div>
          <p className="font-medium text-forth text-center text-3xl ">{content}</p>
        </div>
      </Neuromorphism>
    </div>
  );
};
export default Season;
