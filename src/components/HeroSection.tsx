"use client";

import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import heroImage from '@/statics/images/Hero_Image.png';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="w-full relative px-8 py-12 bg-[#010101] text-white hidden md:block">
        <div className="max-w-5xl mx-auto relative">
          <div className="flex relative">
            <div className="z-10 w-6/12 relative">
              <h1 className="text-4xl font-bold mb-4">
                Want to Turn Social Media Into a<br />
                Profitable Career?
              </h1>
              <h2 
                className="font-['Urbanist'] font-bold text-[35px] leading-[100%] tracking-[0%] align-middle mb-8"
                style={{
                  color: '#00E7F9',
                  textShadow: '0px 4px 4px #FC004E',
                  display: 'inline-block',
                  paddingBottom: '8px'
                }}
              >
                Discover your way to success<br />
                with Fametonic:
              </h2>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✨</span>
                  <span>Start growing your influence right away—no waiting required!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✨</span>
                  <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✨</span>
                  <span>Use a Personal AI Worker to boost your content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">✨</span>
                  <span>Learn from expert-led courses designed for aspiring influencers</span>
                </li>
              </ul>
              <div className='flex flex-col gap-2 items-center justify-center w-1/2'>
              
              <button className="bg-[#E82A45] hover:bg-[#ff2f4e] w-full text-white px-10 py-2 rounded-md font-medium text-lg flex items-center justify-center">
                GET STARTED <span className="ml-2"> {'>'}</span>
              </button>
              <p className="text-xs text-gray-400">1-minute quiz for personalized insights</p>
              </div>
              
              <div className="mt-6 text-xs text-gray-500 max-w-xl">
                <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                <p className="mt-2">Fametonic 2023 ©All Rights Reserved.</p>
              </div>
            </div>
            
            {/* Second section (behind) */}
            <div 
              className="w-7/12 absolute right-0 -top-20 "
            >
              <div className="relative">
                <Image 
                  src={heroImage} 
                  alt='App dashboard display' 
                  width={600} 
                  height={750} 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full bg-[#010101] text-white md:hidden flex flex-col">
        <div className="w-full relative px-4 pt-8 pb-4 flex justify-center">
          <div className="w-full max-w-sm mb-4">
            <Image 
              src={heroImage} 
              alt='App dashboard display' 
              width={400} 
              height={500} 
              className="object-contain mx-auto"
            />
          </div>
        </div>

        {/* Mobile content */}
        <div className="px-6 pb-12">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          
          <h2 
            className="font-['Urbanist'] font-bold text-[28px] leading-[100%] tracking-[0%] text-center mb-8"
            style={{
              color: '#00E7F9',
              textShadow: '0px 4px 4px #FC004E',
              display: 'inline-block',
              paddingBottom: '8px',
              width: '100%'
            }}
          >
            Discover your way to success with Fametonic:
          </h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">✨</span>
              <span>Start growing your influence right away—no waiting required!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">✨</span>
              <span>Create viral TikToks and Reels step by step with easy-to-follow lessons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">✨</span>
              <span>Use a Personal AI Worker to boost your content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-300 mt-1">✨</span>
              <span>Learn from expert-led courses designed for aspiring influencers</span>
            </li>
          </ul>
          
          <div className="text-xs text-gray-500 text-center mb-8">
            <p>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
            <p className="mt-2">Fametonic 2023 ©All Rights Reserved.</p>
          </div>

          <div className="flex flex-col items-center">
            <button className="bg-[#E82A45] hover:bg-[#ff2f4e] w-full max-w-xs text-white px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center">
              GET STARTED <span className="ml-2">{'>'}</span>
            </button>
            <p className="text-xs text-gray-400 mt-2">1-minute quiz for personalized insights</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection; 