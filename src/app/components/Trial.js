import Link from "next/link";
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'

import image from '../assets/image.png'
import image1 from '../assets/image1.png'

const CTASection = () => {

  return (
    <>
      <div style={{
        backgroundImage: `url(${image.src})`,
        width: '100%',
        height: '100%',
      }} className=" bg-cover  md:block hidden  md:mx-auto mx-4 md:px-24  bg bg-center rounded-[25px] relative max-w-7xl  py-20 min-h-[110vh] md:min-h-[414px]">
        <div className="container relative z-[999] mx-auto  flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="lg:max-w-md text-center lg:text-left   w-[100%]">
            <h2 className="md:text-[44px] text-[32px] text-[#1D1F2C] font-semibold leading-tight mb-4">
              You scrolled this far,
              <br />

              give it a try!
            </h2>
            <p className="text-[#4A4C56] font-medium md:text-[18px] mt-3 mb-6">
              Join 4,500+ teams who plan with Float.
            </p>
            <div className='flex items-center gap-4 mt-10 mx-auto md:flex-row flex-col justify-center'>
              <button className='bg-[#3093FD] py-4 leading-tight px-8 rounded-full font-medium text-[12px] text-white  md:text-[18px]'>Start 14-days free trial</button>
              <Link href={"#"} className="text-[#4A4C56] hover:underline font-medium md:text-[14px] md:text-[18px]">No credit card needed</Link>
            </div>
          </div>

          {/* Right image */}

        </div>

        <div className=" mt-8 absolute flex-shrink-0  bottom-0 right-0  flex z-[9999] md:mt-0">
          <img
            src="/img/phone.png"
            alt="Professional using phone"
            className="md:h-[435px] h-[300px] lg:h-[532px] shrink-0"
          />
        </div>





      </div>

      <div style={{
        backgroundImage: `url(${image1.src})`,
        width: '100%',
        height: '100%',
      }} className=" bg-cover  block md:hidden  md:mx-auto mx-4 md:px-24  bg bg-center rounded-[25px] relative max-w-7xl  py-20 min-h-[110vh] md:min-h-[414px]">
        <div className="container relative z-[999] mx-auto  flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="lg:max-w-md text-center lg:text-left   w-[100%]">
            <h2 className="md:text-[44px] text-[32px] text-[#1D1F2C] font-semibold leading-tight mb-4">
              You scrolled this far,
              <br />

              give it a try!
            </h2>
            <p className="text-[#4A4C56] font-medium md:text-[18px] mt-3 mb-6">
              Join 4,500+ teams who plan with Float.
            </p>
            <div className='flex items-center gap-4 mt-10 mx-auto md:flex-row flex-col justify-center'>
              <button className='bg-[#3093FD] py-4 leading-tight px-8 rounded-full font-medium text-[12px] text-white  md:text-[18px]'>Start 14-days free trial</button>
              <Link href={"#"} className="text-[#4A4C56] hover:underline font-medium md:text-[14px] md:text-[18px]">No credit card needed</Link>
            </div>
          </div>

          {/* Right image */}

        </div>

        <div className=" mt-8 absolute flex-shrink-0  bottom-0 right-0  flex z-[9999] md:mt-0">
          <img
            src="/img/phone.png"
            alt="Professional using phone"
            className="md:h-[435px] h-[300px] lg:h-[532px] shrink-0"
          />
        </div>





      </div>
    </>
  );
};

export default CTASection;