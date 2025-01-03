import React from "react";

const Tools = () => {
  return (
    <div>
      <div className="px-6 py-10  w-[100%] md:max-w-7xl mx-4 md:mx-auto">
        <p className="text-center mx-auto p-2 bg-[#E6F2FF] w-[120px] rounded-full text-[#3093FD] mb-6 ">FEATURES</p>
        <h1 className="text-4xl font-semibold text-center mb-12">
          The only tool you need to<br></br> manage team from anywhere
        </h1>

        
        <div className="grid grid-cols-1 lg:grid-cols-[32%,65%] gap-6 items-center mb-10">
          
          <div className="bg-white shadow-md rounded-[25px] p-6 h-[386px]">
            <h2 className="text-[26px] text-[#23262D] font-medium mb-4">
              Create single or recurring<br></br> orders
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Create order or let your employee to create and update orders
            </p>
            <div className="flex justify-around items-center mt-[100px]">
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
    <div key={index} className="flex flex-col items-center">
      {/* Outer Bar */}
      <div className="relative w-5 h-20 bg-[#E6F2FD] rounded-sm">
        {/* Inner Bar */}
        <div
          className="absolute bottom-0 w-full bg-[#3993F6] rounded-md"
          style={{
            height: `${[50, 80, 30, 100, 70, 40, 60][index]}%`, 
          }}
        ></div>
      </div>
      {/* Day Label */}
      <span className="text-sm text-gray-600 mt-2">{day}</span>
    </div>
  ))}
</div>

          </div>

          {/* Right Large Image Section */}
          <div className="">
            <img
              src="./img/Right Card Image.png"
              alt="Right Card"
              className="!w-full h-[386px] object-cover rounded-[25px]"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white shadow-md rounded-[25px] p-6">
            <h2 className="text-[26px] text-[#23262D] font-medium mb-4">
              Focus on what really<br></br> matters
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Boost efficiency by optimizing workflows with the automated SMS
              reminders
            </p>
            <div className="bg-[#F6F8FA] p-4">
            <div className=" p-4 rounded-lg bg-white">
      <p className=" text-sm mb-4 font-bold">Send Reminder</p>
      <div class="space-y-2">
  
  <div class="flex items-center gap-2 px-4 py-2 rounded-md text-gray-600 cursor-pointer border-b">
    <input
      type="radio"
      id="option1"
      name="timeOption"
      value="24h"
      class=""
    />
    <label for="option1" class="flex items-center gap-2 cursor-pointer">
      <span>24 h</span>
    </label>
  </div>

  
  <div class="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-600 cursor-pointer border-b">
    <input
      type="radio"
      id="option2"
      name="timeOption"
      value="48h"
      class=""
    />
    <label for="option2" class="flex items-center gap-2 cursor-pointer">
      <span>48 h</span>
    </label>
  </div>

  
  <div class="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-600 cursor-pointer border-b">
    <input
      type="radio"
      id="option3"
      name="timeOption"
      value="72h"
      class=""
    />
    <label for="option3" class="flex items-center gap-2 cursor-pointer">
      <span>72 h</span>
    </label>
  </div>
</div>

    </div>
    </div>
          </div>

          {/* Second Card */}
          <div className="bg-white shadow-md rounded-[25px] p-6">
            <h2 className="text-[26px] text-[#23262D] font-medium mb-4">
              Direct communication with employees
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Boost efficiency by optimizing workflows with the Modula API
            </p>
            <div className="space-y-4">
            <div className="rounded-lg shadow-lg group relative min-h-[66px] ">
                <div className="border border-dashed border-[#3993F6] rounded-lg absolute top-0 left-0 w-full h-full"></div>
              <div className="flex items-center group-hover:rotate-[5deg] group-hover:bg-[#3993F6] group-hover:text-white transition ease-in-out duration-500 rounded-lg gap-4 p-2 w-full h-full bg-white absolute ">
                <div className="">
                <img
              src="./img/Ellipse 16.png"
              alt="Right Card"
              className="!w-full object-cover"
            />
                </div>
                <div>
                <p className="text-[14px font-semibold">
                John P.
                </p>
                <p className="text-[#706F6F] text-[14px group-hover:text-white ">Clients wants to book a service</p>
                </div>
              </div>
              </div>
              <div className="rounded-lg shadow-lg group relative min-h-[66px] ">
                <div className="border border-dashed border-[#3993F6] rounded-lg absolute top-0 left-0 w-full h-full"></div>
              <div className="flex items-center group-hover:rotate-[5deg] group-hover:bg-[#3993F6] group-hover:text-white transition ease-in-out duration-500 rounded-lg gap-4 p-2 w-full h-full bg-white absolute ">
                <div className="">
                <img
              src="./img/Ellipse 16 (2).png"
              alt="Right Card"
              className="!w-full object-cover"
            />
                </div>
                <div>
                <p className="text-[14px font-semibold">
                Johanna K.
                </p>
                <p className="text-[#706F6F] text-[14px group-hover:text-white ">Client handover key</p>
                </div>
              </div>
              </div>
              <div className="rounded-lg shadow-lg group relative min-h-[66px] ">
                <div className="border border-dashed border-[#3993F6] rounded-lg absolute top-0 left-0 w-full h-full"></div>
              <div className="flex items-center group-hover:rotate-[5deg] group-hover:bg-[#3993F6] group-hover:text-white transition ease-in-out duration-500 rounded-lg gap-4 p-2 w-full h-full bg-white absolute ">
                <div className="">
                <img
              src="./img/Ellipse 16 (1).png"
              alt="Right Card"
              className="!w-full object-cover"
            />
                </div>
                <div>
                <p className="text-[14px font-semibold">
                Sarah A.
                </p>
                <p className="text-[#706F6F] text-[14px group-hover:text-white ">Accepted a new project</p>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white shadow-md rounded-[25px] p-6">
            <h2 className="text-[26px] text-[#23262D] font-medium mb-4">
              Create and send proposal and get them signed
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Boost efficiency by sending proposal online and let customer sign
              it online
            </p>
            <div className="bg-[#F6F8FA] p-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-4">
        {/* First Step */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="">
              <div className="">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6303 5.79154C10.6828 5.84399 10.7245 5.90628 10.7529 5.97485C10.7813 6.04341 10.7959 6.11691 10.7959 6.19113C10.7959 6.26535 10.7813 6.33884 10.7529 6.40741C10.7245 6.47597 10.6828 6.53826 10.6303 6.59072L6.67675 10.5443C6.6243 10.5968 6.56201 10.6384 6.49344 10.6669C6.42488 10.6953 6.35139 10.7099 6.27716 10.7099C6.20294 10.7099 6.12945 10.6953 6.06088 10.6669C5.99232 10.6384 5.93003 10.5968 5.87757 10.5443L4.1832 8.84988C4.07722 8.74391 4.01768 8.60017 4.01768 8.45029C4.01768 8.30042 4.07722 8.15668 4.1832 8.0507C4.28918 7.94473 4.43291 7.88519 4.58279 7.88519C4.73266 7.88519 4.8764 7.94473 4.98238 8.0507L6.27716 9.34619L9.83111 5.79154C9.88357 5.73903 9.94586 5.69737 10.0144 5.66894C10.083 5.64052 10.1565 5.62589 10.2307 5.62589C10.3049 5.62589 10.3784 5.64052 10.447 5.66894C10.5155 5.69737 10.5778 5.73903 10.6303 5.79154ZM14.749 7.8855C14.749 9.33767 14.3184 10.7572 13.5116 11.9647C12.7049 13.1721 11.5581 14.1132 10.2165 14.6689C8.87489 15.2246 7.3986 15.37 5.97434 15.0867C4.55007 14.8034 3.2418 14.1041 2.21496 13.0773C1.18813 12.0504 0.48884 10.7422 0.205536 9.31791C-0.0777674 7.89365 0.0676344 6.41736 0.623355 5.07573C1.17908 3.7341 2.12016 2.58739 3.32759 1.78061C4.53502 0.973831 5.95458 0.543213 7.40675 0.543213C9.35341 0.545269 11.2198 1.31949 12.5963 2.69599C13.9728 4.07249 14.747 5.93884 14.749 7.8855ZM13.6195 7.8855C13.6195 6.65674 13.2551 5.45558 12.5724 4.43391C11.8898 3.41223 10.9195 2.61594 9.78425 2.14571C8.64902 1.67548 7.39985 1.55245 6.19471 1.79217C4.98956 2.03189 3.88256 2.62359 3.0137 3.49246C2.14484 4.36132 1.55313 5.46832 1.31341 6.67346C1.0737 7.87861 1.19673 9.12778 1.66695 10.263C2.13718 11.3982 2.93348 12.3685 3.95515 13.0512C4.97683 13.7338 6.17799 14.0982 7.40675 14.0982C9.05388 14.0963 10.633 13.4412 11.7977 12.2765C12.9624 11.1118 13.6176 9.53264 13.6195 7.8855Z" fill="#28C943"/>
</svg>

              </div>
            </div>
            <div className="h-full w-px bg-gray-300"></div>
          </div>
          <div>
            <p className="text-[#706F6F] text-[10.5px]">10, Dec 2024</p>
            <p className="font-medium text-[12px]">Proposal sent by email and SMS</p>
          </div>
        </div>

        {/* Second Step */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="">
              <div className="">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3373_4760)">
<path d="M17.8306 9.59398C17.8059 9.53821 17.2079 8.21165 15.8785 6.88227C14.1072 5.11095 11.8699 4.1748 9.40741 4.1748C6.94492 4.1748 4.70764 5.11095 2.93631 6.88227C1.60694 8.21165 1.00614 9.54032 0.984253 9.59398C0.95214 9.66621 0.935547 9.74438 0.935547 9.82343C0.935547 9.90247 0.95214 9.98064 0.984253 10.0529C1.00896 10.1086 1.60694 11.4345 2.93631 12.7639C4.70764 14.5345 6.94492 15.4706 9.40741 15.4706C11.8699 15.4706 14.1072 14.5345 15.8785 12.7639C17.2079 11.4345 17.8059 10.1086 17.8306 10.0529C17.8627 9.98064 17.8793 9.90247 17.8793 9.82343C17.8793 9.74438 17.8627 9.66621 17.8306 9.59398ZM9.40741 14.3411C7.23438 14.3411 5.33597 13.551 3.76444 11.9936C3.11962 11.3524 2.57103 10.6212 2.13572 9.82272C2.57091 9.0242 3.11952 8.29297 3.76444 7.6518C5.33597 6.09439 7.23438 5.30439 9.40741 5.30439C11.5804 5.30439 13.4789 6.09439 15.0504 7.6518C15.6965 8.29281 16.2463 9.02405 16.6826 9.82272C16.1736 10.773 13.9561 14.3411 9.40741 14.3411ZM9.40741 6.43397C8.73718 6.43397 8.082 6.63272 7.52473 7.00508C6.96745 7.37744 6.5331 7.90669 6.27662 8.5259C6.02013 9.14511 5.95302 9.82648 6.08378 10.4838C6.21453 11.1412 6.53728 11.745 7.01121 12.2189C7.48513 12.6929 8.08895 13.0156 8.7463 13.1464C9.40366 13.2771 10.085 13.21 10.7042 12.9535C11.3234 12.697 11.8527 12.2627 12.2251 11.7054C12.5974 11.1481 12.7962 10.493 12.7962 9.82272C12.7952 8.92425 12.4379 8.06286 11.8026 7.42754C11.1673 6.79223 10.3059 6.43491 9.40741 6.43397ZM9.40741 12.0819C8.96059 12.0819 8.52381 11.9494 8.15229 11.7011C7.78077 11.4529 7.49121 11.1001 7.32022 10.6873C7.14923 10.2745 7.10449 9.82021 7.19166 9.38198C7.27883 8.94374 7.49399 8.5412 7.80994 8.22525C8.12589 7.9093 8.52844 7.69413 8.96667 7.60696C9.40491 7.51979 9.85915 7.56453 10.272 7.73552C10.6848 7.90651 11.0376 8.19608 11.2858 8.56759C11.5341 8.93911 11.6666 9.3759 11.6666 9.82272C11.6666 10.4219 11.4286 10.9965 11.0049 11.4202C10.5812 11.8439 10.0066 12.0819 9.40741 12.0819Z" fill="#706F6F"/>
</g>
<defs>
<clipPath id="clip0_3373_4760">
<rect width="18.0733" height="18.0733" fill="white" transform="translate(0.369141 0.785522)"/>
</clipPath>
</defs>
</svg>


              </div>
            </div>
            <div className="h-full w-px bg-gray-300"></div>
          </div>
          <div>
            <p className="text-[#706F6F] text-[10.5px]">10, Dec 2024</p>
            <p className="font-medium text-[12px]">Customer sent message</p>
          </div>
        </div>

        {/* Third Step */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="">
              <div className="">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6214 4.11145L3.19601 4.11145C2.89643 4.11145 2.60911 4.23046 2.39727 4.4423C2.18544 4.65414 2.06643 4.94145 2.06643 5.24103L2.06643 16.5369C2.06512 16.7523 2.12606 16.9635 2.24191 17.1451C2.35776 17.3267 2.52359 17.4709 2.71947 17.5605C2.86873 17.6301 3.03135 17.6662 3.19601 17.6664C3.46118 17.6658 3.71756 17.5713 3.91965 17.3996L3.926 17.3946L6.23176 15.4073L15.6214 15.4073C15.921 15.4073 16.2083 15.2883 16.4202 15.0764C16.632 14.8646 16.751 14.5773 16.751 14.2777L16.751 5.24103C16.751 4.94145 16.632 4.65414 16.4202 4.4423C16.2083 4.23046 15.921 4.11145 15.6214 4.11145ZM15.6214 14.2777L6.01997 14.2777C5.88435 14.2778 5.75329 14.3266 5.65073 14.4154L3.19601 16.5369L3.19601 5.24103L15.6214 5.24103L15.6214 14.2777Z" fill="#706F6F"/>
</svg>


              </div>
            </div>
            <div className="h-full w-px bg-gray-300"></div>
          </div>
          <div>
            <p className="text-[#706F6F] text-[10.5px]">10, Dec 2024</p>
            <p className="font-medium text-[12px]">Proposal sent by email and SMS</p>
          </div>
        </div>

        {/* Fourth Step */}
     <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="">
              <div className="">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7519 12.5192L4.88137 12.5192C5.06916 12.1492 5.25766 11.7687 5.44616 11.3818C6.50514 11.4983 7.74627 10.7619 9.1639 9.18335C9.5169 10.1336 10.1841 11.367 11.3228 11.3896C11.9624 11.4023 12.6014 11.0225 13.2586 10.2339C13.738 10.8071 14.7257 11.3896 16.7519 11.3896C16.9017 11.3896 17.0453 11.3301 17.1512 11.2241C17.2572 11.1182 17.3167 10.9746 17.3167 10.8248C17.3167 10.675 17.2572 10.5313 17.1512 10.4254C17.0453 10.3195 16.9017 10.26 16.7519 10.26C14.6035 10.26 13.9682 9.52223 13.9279 9.12264C13.9343 9.00143 13.8997 8.8816 13.8298 8.78238C13.7599 8.68316 13.6587 8.6103 13.5424 8.5755C13.4216 8.5392 13.2923 8.54366 13.1742 8.58819C13.0562 8.63272 12.9561 8.71484 12.8894 8.82189C12.0373 10.1308 11.5212 10.2642 11.3419 10.26C10.7587 10.2487 10.1657 8.8819 9.96237 7.90057C9.94068 7.79547 9.88949 7.69872 9.8148 7.62166C9.7401 7.5446 9.645 7.49041 9.54062 7.46545C9.43625 7.44048 9.32692 7.44577 9.22544 7.4807C9.12397 7.51562 9.03454 7.57874 8.96764 7.66265C7.54154 9.45163 6.58563 10.0538 5.99048 10.2099C6.58986 8.87766 7.03746 7.70784 7.32409 6.72298C7.80558 5.06814 7.84088 3.91102 7.4307 3.18597C7.2189 2.80615 6.7713 2.35291 5.87328 2.35291C4.73946 2.35291 3.84498 3.4246 3.41856 5.29335C3.16511 6.40246 3.12346 7.63794 3.30419 8.6821C3.48492 9.72626 3.8598 10.4859 4.40483 10.937C4.14149 11.4821 3.87322 12.0144 3.612 12.5192H2.06729C1.9175 12.5192 1.77385 12.5787 1.66793 12.6846C1.56201 12.7905 1.5025 12.9342 1.5025 13.0839C1.5025 13.2337 1.56201 13.3774 1.66793 13.4833C1.77385 13.5892 1.9175 13.6487 2.06729 13.6487H3.01403C2.21485 15.1313 1.59358 16.1649 1.58369 16.1818C1.54343 16.2454 1.51628 16.3164 1.50385 16.3907C1.49142 16.4649 1.49395 16.5409 1.5113 16.6141C1.52866 16.6874 1.56047 16.7564 1.60489 16.8172C1.64931 16.878 1.70542 16.9293 1.76994 16.968C1.83446 17.0068 1.90608 17.0323 1.98059 17.043C2.05509 17.0537 2.13099 17.0494 2.20382 17.0304C2.27664 17.0113 2.34492 16.9779 2.40465 16.9321C2.46437 16.8863 2.51434 16.829 2.5516 16.7636C2.56219 16.7452 3.34725 15.437 4.2954 13.6487L16.7519 13.6487C16.9017 13.6487 17.0453 13.5892 17.1512 13.4833C17.2572 13.3774 17.3167 13.2337 17.3167 13.0839C17.3167 12.9342 17.2572 12.7905 17.1512 12.6846C17.0453 12.5787 16.9017 12.5192 16.7519 12.5192ZM4.5199 5.54468C4.80089 4.31132 5.3452 3.48249 5.87328 3.48249C6.24958 3.48249 6.37454 3.6138 6.44725 3.74159C6.65905 4.11788 6.90756 5.44937 4.91808 9.84063C4.33493 9.04427 4.13655 7.22423 4.5199 5.54468Z" fill="#706F6F"/>
</svg>

              </div>
            </div>
            <div className="h-full w-px bg-gray-300"></div>
          </div>
          <div>
            <p className="text-[#706F6F] text-[10.5px]">10, Dec 2024</p>
            <p className="font-medium  text-[12px]">Proposal sent by email and SMS</p>
          </div>
        </div>
      </div>
    </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
