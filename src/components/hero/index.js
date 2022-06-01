import React from "react";
import TypeAnimation from "react-type-animation";
import DiniProfile from "../../assets/dini.webp";
const Hero = () => {
  return (
    <div className="lg:hero min-h-screen bg-base-100 px-5 " id="hero">
      <div className="hero-content flex-col lg:flex-row max-w-4xl gap-5 ">
        <img
          src={DiniProfile.src}
          className="max-w-sm rounded-lg shadow-2xl mt-12"
        />
        <div>
          <div className="text-3xl lg:text-5xl font-bold ">
            {" "}
            <TypeAnimation
              cursor={true}
              sequence={["Rika Rahmadini", 2000, ""]}
              wrapper="h1"
              repeat={Infinity}
            />
          </div>

          <p className="py-6 text-justify">
            You get ideas from daydreaming. You get ideas from being bored. You
            get ideas all the time. The only difference between writers and
            other people is we notice when were doing it.
          </p>
          <a href="#platform">
            <button className="btn btn-primary">Explore My Works!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
