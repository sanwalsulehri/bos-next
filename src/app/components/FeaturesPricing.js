import React from "react";

const FeaturesPricing = () => {
  // Data object containing all plans and features
  const pricingData = {
    plans: [
      { name: "Essential", price: 499, unit: "kr / month", seats: "First 5 seats included" },
      { name: "Professional", price: 699, unit: "kr / month", seats: "First 5 seats included" },
      { name: "Ultimate", price: 899, unit: "kr / month", seats: "First 5 seats included" },
    ],
    features: [
      {
        name: "Web, Desktop & Mobile app",
        values: [true, "whiteIcon", true], // Specific value for white icon
      },
      {
        name: "Dark/light theme",
        values: [true, true, "whiteIcon"], // White icon for the last plan
      },
      {
        name: "Multiple currencies",
        values: ["whiteIcon", true, true], // White icon for the first plan
      },
      {
        name: "Recycle bin retention",
        values: ["7 Days", "180 Days", "2 years"],
      },
      {
        name: "Automations",
        values: [true, "whiteIcon", true],
      },
      {
        name: "Automation runs",
        values: ["100", "1000", "5000"],
      },
    ],
  };

  // Utility to render icons or text based on the feature type
  const renderFeatureValue = (value) =>
    value === true ? (
      // Green check icon
      <svg className="h-5 w-5 mt-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ) : value === "whiteIcon" ? (
      // White tick icon
      <svg
        width="20"
        className="mt-4"
        height="20"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9993 0.166626C5.01935 0.166626 0.166016 5.01996 0.166016 11C0.166016 16.98 5.01935 21.8333 10.9993 21.8333C16.9793 21.8333 21.8327 16.98 21.8327 11C21.8327 5.01996 16.9793 0.166626 10.9993 0.166626ZM15.3652 9.04997L10.306 14.0983C10.1543 14.2608 9.9485 14.3366 9.73183 14.3366C9.526 14.3366 9.32017 14.2608 9.15767 14.0983L6.63352 11.5742C6.31935 11.26 6.31935 10.7399 6.63352 10.4258C6.94768 10.1116 7.46768 10.1116 7.78185 10.4258L9.73183 12.3758L14.2169 7.90164C14.531 7.57664 15.051 7.57664 15.3652 7.90164C15.6793 8.21581 15.6793 8.72497 15.3652 9.04997Z"
          fill="#DFE1E7"
        />
      </svg>
    ) : (
      <span className="text-[#4A4C56] mt-4 font-medium">{value}</span>
    );

  return (
    <div className="mx-4 md:max-w-7xl md:block hidden md:mx-auto">
      <h1 className="text-[#1D1F2C] mb-10 text-center font-medium text-[32px] md:text-[42px]">
        Compare all features
      </h1>
      {/* Pricing Plans */}
      <div className=" grid-cols-3 hidden md:grid bg-white rounded-t-[20px] px-8 py-4 gap-6 max-w-4xl ml-auto">
        {pricingData.plans.map((plan, index) => (
          <div key={index} className="">
            <h2 className="text-[#3093FD] text-[20px]  pt-3 font-medium ">{plan.name}</h2>
            <div className="mb-2 ">
              <div className="flex items-baseline">
                <span className="text-[36px] font-semibold text-[#070707]">{plan.price}</span>
                <span className="text-[#070707] text-[16px] font-semibold ml-2">{plan.unit}</span>
              </div>
            </div>
            <div className="border-b  border-gray-200 pb-4">
              <p className="text-[#4A4C56]">{plan.seats}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Features Table */}
      <div className="mx-auto rounded-l-[20px] rounded-b-[20px] bg-white py-6">
        <div className="mb-6 px-6 border-b border-[#F6F8FA] pb-5 flex items-center gap-2">
          <div className=" w-full  flex items-center gap-4 sm:justify-normal justify-between py-4  ">
            <h1 className="text-[#1D1F2C] text-[20px] sm:text-[24px] font-medium">General </h1>
            <div className="w-[36px] h-[36px] bg-[#E6F2FF] rounded-full flex items-center justify-center">
              <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 1" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>


            </div>
          </div>
        </div>
        <div className="space-y-4 mb-10 px-6">
          {pricingData.features.map((feature, index) => (
            <div key={index} className="grid sm:grid-cols-4 sm:gap-0 gap-4   items-center">
              <span className="text-[#4A4C56] sm:bg-transparent bg-[#F6F8FA] rounded-[6px] sm:rounded-none sm:p-0 p-3.5 font-medium">{feature.name}</span>
              {feature.values.map((value, valueIndex) => (
                <div key={valueIndex} className="flex sm:justify-center">
                  {renderFeatureValue(value)}
                </div>
              ))}
            </div>
          ))}
        </div>
        {["Time tracking", "Task & Project", "Sales & Budgeting", "Custom Fields", "Invoicing"].map((label, idx) => {
          return (
            <div key={idx} className="border-t border-[#F6F8FA] w-full px-6 flex items-center gap-4 sm:justify-normal justify-between py-4  ">
              <h1 className="text-[#1D1F2C] text-[20px] sm:text-[24px] font-medium">{label}</h1>
              <div className="w-[36px] h-[36px] bg-[#E6F2FF] rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M18 12L6 12" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default FeaturesPricing;
