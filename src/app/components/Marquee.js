import Image from "next/image";
import React from "react";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

const Marquee = () => {



  return (
    <div className="py-10">
      <div className="py-[2px] flex items-center px-[37px] relative">
        <div
          style={{
            background: "linear-gradient(to right, #F3F6F700, #F3F6F7)",
          }}
          className="h-full absolute top-0 left-0 w-[412px]"
        ></div>

<div
          style={{
            background: "linear-gradient(to right, #F3F6F700, #F3F6F7)",
          }}
          className="h-full absolute top-0 right-0 w-[412px]"
        ></div>



        <marquee className="flex items-center gap-10" behaviour="scroll" direction="right">
            <Image src={""} />
        </marquee>
      </div>
    </div>
  );
};

export default Marquee;
