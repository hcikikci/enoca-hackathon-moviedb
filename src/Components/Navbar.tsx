import React from 'react';

function Navbar() {
    return (
        <div className="fixed inset-x-0 grid grid-cols-3 bottom-0 py-[16px] px-4 bg-dark-blue lg:hidden text-[12px] font-roboto border-t border-b-dark-blue border-b border-light-blue">
            <div className="flex place-items-center flex-col">
                <svg className="w-[22px]" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-light-blue" d="M15.5246 21H13.7818H6.34876H4.60596C2.86861 21 1.46021 19.4607 1.46021 17.5618V8.84736C1.4669 8.09967 1.78834 7.39702 2.3316 6.94256L8.26584 1.6853C9.31003 0.771566 10.7944 0.771566 11.8386 1.6853L17.799 6.93303C18.3402 7.38935 18.6611 8.09083 18.6704 8.83784V17.5618C18.6704 19.4607 17.2619 21 15.5246 21Z" stroke="#0296E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 className="text-light-blue pt-[10px]">Home</h2>
            </div>

            <div className="flex place-items-center flex-col">

                <svg className="w-[22px]" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="9.78854" cy="10.7666" rx="8.14181" ry="8.98856" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path className="stroke-gray" d="M15.4513 17.4851L18.6433 21" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h2 className="text-gray pt-[10px]">Search</h2>
            </div>

            <div className="flex place-items-center flex-col">
                <svg className="w-[22px]" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-gray" d="M15.5246 21H13.7818H6.34876H4.60596C2.86861 21 1.46021 19.4607 1.46021 17.5618V8.84736C1.4669 8.09967 1.78834 7.39702 2.3316 6.94256L8.26584 1.6853C9.31003 0.771566 10.7944 0.771566 11.8386 1.6853L17.799 6.93303C18.3402 7.38935 18.6611 8.09083 18.6704 8.83784V17.5618C18.6704 19.4607 17.2619 21 15.5246 21Z" stroke="#0296E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 className="text-gray pt-[10px]">Watch list</h2>
            </div>
        </div>
    );
}

export default Navbar;