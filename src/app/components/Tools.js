import React from "react";

const Tools = () => {
  return (
    <div>
      <div className="px-6 py-10 bg-gray-50 w-[80%] mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-12">
          The only tool you need to<br></br> manage team from anywhere
        </h1>

        
        <div className="grid grid-cols-1 lg:grid-cols-[32%,65%] gap-6 items-center mb-10">
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl text-[#23262D] font-medium mb-4">
              Create single or recurring<br></br> orders
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Create order or let your employee to create and update orders
            </p>
            <div className="flex justify-around items-center">
  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
    <div key={index} className="flex flex-col items-center">
      {/* Outer Bar */}
      <div className="relative w-4 h-20 bg-[#E6F2FD] rounded-sm">
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
          <div className=" overflow-hidden">
            <img
              src="./img/Right Card Image.png"
              alt="Right Card"
              className="!w-full h-[386px] object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl text-[#23262D] font-medium mb-4">
              Focus on what really<br></br> matters
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Boost efficiency by optimizing workflows with the automated SMS
              reminders
            </p>
            <div className="bg-[#F6F8FA] p-4">
            <div className=" p-4 rounded-lg bg-white">
      <p className=" text-sm mb-4 font-bold">Send Reminder</p>
      <div className="space-y-2">
        {/* First Option */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-md  text-gray-600 cursor-pointer border-b ">
          <div className="h-4 w-4 rounded-full border-2 bg-[#3993F6] border-gray-300"></div>
          <span>24 h</span>
        </div>
        {/* Second Option */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-600 cursor-pointer border-b">
          <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
          <span>48 h</span>
        </div>
        {/* Third Option */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-600 cursor-pointer border-b">
          <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
          <span>72 h</span>
        </div>
      </div>
    </div>
    </div>
          </div>

          {/* Second Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl text-[#23262D] font-medium mb-4">
              Direct communication with employees
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Boost efficiency by optimizing workflows with the Modula API
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full">
                    
                </div>
                <p className="text-sm">
                  John P. - Client wants to book a service
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <p className="text-sm">Johanna K. - Client handover keys</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <p className="text-sm">Sarah A. - Accepted new project</p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl text-[#23262D] font-medium mb-4">
              Create and send proposal and get them signed
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Boost efficiency by sending proposal online and let customer sign
              it online
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-sm text-gray-600">
                Proposal sent by email and SMS
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Proposal signed by BankID
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
