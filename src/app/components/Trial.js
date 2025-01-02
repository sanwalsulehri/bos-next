import Link from "next/link";
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import Image from "next/image";

const CTASection = () => {
    
    return (
      <div className="bg-[#EEF5FE] rounded-[25px] relative w-[80%] mx-auto min-h-screen lg:min-h-[414px]  px-20 py-16">
        <div className="container relative z-[99999] mx-auto  flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="lg:max-w-md text-center lg:text-left w-[100%]">
            <h2 className="text-[44px] text-[#1D1F2C] font-semibold leading-tight mb-4">
              You scrolled this far,
              <br />

              give it a try!
            </h2>
            <p className="text-[#4A4C56] font-medium md:text-[18px] mt-3 mb-6">
              Join 4,500+ teams who plan with Float.
            </p>
            <div className='flex items-center gap-4 mt-10 mx-auto justify-center'>
            <button className='bg-[#3093FD] py-4 leading-tight px-8 rounded-full font-medium md:text-[14px] text-white  lg:text-[18px]'>Start 14-days free trial</button>
            <Link href={"#"} className="text-[#4A4C56] hover:underline font-medium md:text-[14px] lg:text-[18px]">No credit card needed</Link>
        </div>
          </div>
  
          {/* Right image */}
         
        </div>

        <div className=" mt-8 absolute flex-shrink-0  bottom-0 right-0  flex z-[9999] md:mt-0">
            <img 
              src="/img/phone.png"  
              alt="Professional using phone" 
              className="h-[435px] lg:h-[532px] shrink-0"
            />
          </div>



        <div className="absolute top-32 lg:rotate-0  rotate-[120deg] lg:bottom-0 -left-10 lg:left-0 z-[2]">
            <Image src={circle1} alt="cir" className="lg:w-[463px] w-[300px]" />
        </div>
        <div className="absolute lg:rotate-0 rotate-[120deg] bottom-20 lg:top-0 -right-10 lg:right-0 z-[2]">
            <Image src={circle2} alt="cir" className="lg:w-[463px] w-[300px]" />
        </div>
      </div>
    );
  };
  
  export default CTASection;