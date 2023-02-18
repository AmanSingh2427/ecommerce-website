// import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/Productcontext";
// import { AppContext } from "./context/Productcontext";

const About = () => {

const {myName}=useProductContext();

    const data={
        name:"Aman Ecommerce",
      }

  return (
    <>
    {myName}
    <HeroSection myData={data} />{" "}
    </>
  );
};

export default About;