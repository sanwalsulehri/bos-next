import Image from "next/image";
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const MarqueeSlider = () => {
  return (
    <div className="pt-10 pb-20 2xl:max-w-[1202px] 2xl:mx-auto relative">
      <div className="w-full overflow-hidden">
      <div
  style={{
    background: "linear-gradient(to left, #F3F6F700, #F3F6F7)",  

  }}
  className="absolute top-0 left-0 h-full z-[9999] w-[70px] sm:w-[150px] md:w-[412px]"
>
</div>

<div
  style={{
    background: "linear-gradient(to right, #F3F6F700, #F3F6F7)",  
  }}
  className="absolute top-0 right-0 h-40 z-[9999] w-[70px] sm:w-[150px] md:w-[412px]"
>
</div>

        <marquee behavior="scroll" direction="left" scrollamount="8" className="!flex w-full m gap-10 justify-between">
          {[logo1, logo2, logo3, logo4, logo1, logo5,logo1, logo2, logo3, logo4, logo1, logo5,logo1, logo2, logo3, logo4, logo1, logo5].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 inline-block w-[40%] lg:w-[15%]">
              <Image src={logo} className="sm:w-[103px] w-[70px] inline-block h-[29px] sm:h-[43px] object-cover" alt={`logo${idx + 1}`} />
            </div>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
