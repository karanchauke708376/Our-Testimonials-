import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {

  return (

    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 ">
     
      <div className="text-center ">

        <h1 className="tracking-wider text-4xl font-bold flex justify-end ">O U R - T E S T I M O N I A L S</h1>
        
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        
        
        <Testimonial  reviews = {reviews} />

      </div>


    </div>
  )

};

export default App;
