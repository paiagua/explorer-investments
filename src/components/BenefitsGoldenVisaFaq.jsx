
import FaqsGoldenVisa from './FaqPage';


import React, { useState, useEffect, useRef } from 'react';

const scrollToTop = () => {
  const element = document.getElementById("DivAskSimulation");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
 
 

 

 
 
 
 

 



 
 

 

function Benefits() {
   const [showDetails, setShowDetails] = useState(false);

  return (
    <>
   


 
 <FaqsGoldenVisa />
 
    </>
    
  )
}

export default Benefits