import React from "react";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data={
    name:"Aman Store",
  };  

   return (
   <>
   <HeroSection myData={data}/>;
   <FeatureProduct/>
   <Services/>
   <Trusted/>
   </>
   );
};


export default Home;
