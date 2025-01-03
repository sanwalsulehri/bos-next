import React from "react";
import apps from "../assets/apps.svg";
import headphone from "../assets/headphone.svg";
import backup from "../assets/backup.svg";
import Image from "next/image";

const Plans = () => {
  const cards = [
   
    {
      id: 1,
      icon: headphone,
      title: "24/7 Support",
      description:
        "Get access to our team at any time with round-the-clock support for your queries and issues.",
    },
    {
        id: 2,
        icon: apps,
        title: "IOS + Android App",
        description:
          "Creating account to our website and use it for your required time. We always ready to give you support all the time.",
      },
    {
      id: 3,
      icon: backup,
      title: "Automated backup",
      description:
        "Creating account to our website and use it for your required time. We always ready to give you support all the time.",
    },
  ];

  return (
    <div className="py-28 mx-4 md:max-w-7xl px-2 md:mx-auto">
      <h1 className="text-[#1D1F2C] text-center font-medium text-[28px] md:text-[42px]">
        Included in all plans
      </h1>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="mt-12 w-full rounded-3xl bg-white p-4 md:p-8 text-center"
          >
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50">
              <Image src={card.icon} alt={`${card.title} Icon`} className="h-[28px] w-[26px]" />
            </div>
            {/* Title */}
            <h3 className="mb-2 text-[18px] lg:text-[20px] font-medium text-[#041B25]">
              {card.title}
            </h3>
            {/* Description */}
            <p className="md:text-[18px] text-[16px] leading-7 text-[#4A4C56]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
