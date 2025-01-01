import React from 'react';
import SvgGear from './svgs/gear';

const TextCard = () => {
    return (
        <div className="flex   flex-col px-6 py-6 gap-5 bg-white shadow-sm rounded-xl">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-[#F0F4FE] rounded-full">
               <SvgGear />
            </div>
            <div className="space-y-2.5">
                <h2 className="text-xl font-semibold">Simple & Easy Setup</h2>
                <p className="text-gray-600">
                    Creating account to our website and use it for your required time. We always ready to give you support all the time.
                </p>
            </div>
        </div>
    );
};

export default TextCard;