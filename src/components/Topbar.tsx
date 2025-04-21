"use client";

import { Typography } from '@mui/material';
import React from 'react';
import { Figtree } from 'next/font/google';

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const Topbar: React.FC = () => {
    return (
        <div className='bg-gradient-to-r from-[#FC004E] to-[#10CBE0] w-full md:h-11 flex items-center justify-center z-10'>
            {/* Desktop View */}
            <div className="items-center gap-2 hidden md:flex">
                <span className="inline-flex items-center text-xl">🚀</span>
                <Typography className={`font-extrabold text-2xl text-[#00E7F9] ${figtree.className}`}>
                    FRESH BEGINNINGS SALE:
                </Typography>

                <Typography className={`font-extrabold text-2xl text-white ${figtree.className} mx-2`}>
                    Extra 25% OFF,
                </Typography>

                <Typography className={`font-semibold text-2xl text-white ${figtree.className}`}>
                    Limited Spots - start your journey today!
                </Typography>
            </div>


            {/* Mobile View */}
            <div className="flex md:hidden w-full py-2 items-center justify-center">
                <div className="flex items-center justify-center text-white text-base flex-wrap text-center">
                    <span className="text-xl">🚀</span>
                    <span className={`font-bold text-[#00E7F9] capitalize ${figtree.className}`}>
                        FRESH BEGINNINGS SALE:
                    </span>
                    <span className={`font-bold ${figtree.className}`}>
                        Extra 25% OFF,
                    </span>
                    <span className={`text-white font-medium ${figtree.className}`}>
                        Limited Spots - start your journey today!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;