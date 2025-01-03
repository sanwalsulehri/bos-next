import React from 'react';
import SvgGear from './svgs/gear';

const TextCard = ({heading, description, icon}) => {
    return (
        <div className="flex   flex-col px-6 py-6 gap-5 bg-white shadow-sm rounded-xl">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-[#F0F4FE] rounded-full">
               {icon}
            </div>
            <div className="space-y-2.5">
                <h2 className="text-xl font-semibold">{heading}</h2>
                <p className="text-gray-600">
                   {description}
                </p>
            </div>
        </div>
    );
};

export default TextCard;