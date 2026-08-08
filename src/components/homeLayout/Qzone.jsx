import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playground from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div>
      <h2 className="font-bold mb-5 bg-base-200 p-3">Qzone</h2>
      <img src={swimmingImage} alt="" />
      <img src={classImage} alt="" />
      <img src={playground} alt="" />
    </div>
  );
};

export default Qzone;
