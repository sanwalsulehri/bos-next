import React from 'react';

const Step = () => {
    return (
        <div className="flex flex-col md:gap-20 gap-8 lg:flex-row items-center lg:items-start justify-between  md:p-8 p-0 rounded-lg  ">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left md:px-0 px-3">
          <h2 className="text-3xl text-left max-w-sm font-semibold text-gray-900 mb-4">
            Coordinate Projects  and Team Availability
          </h2>
          <p className="text-gray-600 text-left max-w-md leading-relaxed">
            Know where you stand even before the project wrap-up. Get live insights on costs, revenue,
            and margins to make smarter moves along the way.
          </p>
        </div>
  
        {/* Right Section */}
        <div className="lg:w-1/2 bg-[#ECF1FA]   lg:mt-0 p-5 md:p-10 rounded-2xl  border-l-2 border-[#3093FD] shadow-sm">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Budget</h3>
          <div className=" px-6 p-6 rounded-xl max-w-sm bg-white gap-4">
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Storage solutions</span>
              
            </div>
            <div className="h-5 bg-gray-200 bg-[#E6F5FE] rounded-sm overflow-hidden">
              <div className="h-full w-[42%] bg-[#3093FD]"></div>
            </div>
            <div className="flex mt-1 items-center justify-between text-xs text-gray-600">
          <span>42%</span>
            <span>3500 kr</span>
          </div>
          </div>
          
          </div>
          <h4 className="mt-6 text-lg font-medium text-gray-900">Cashflow overview</h4>
          <p className="text-sm text-gray-600 mt-2">
            Monitor your budget effortlessly and track progress, staying in sync with your future
            financial aspirations.
          </p>
        </div>
      </div>
    );
};

export default Step;
