import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import brandLogo from '@/statics/images/Brand_Logo.png';
import BurgerMenu from '@/statics/images/Burger.png';

const Navbar: React.FC = () => {
    return (
        <div className='w-full'>
            <div className='flex items-start justify-between max-w-5xl mx-auto'>
                <div className='md:hidden'></div>
                <div className='flex items-center gap-2'>
                    <Image src={brandLogo} alt='logo' width={150} height={150} />
                </div>
                <Button className='md:hidden'>
                    <Image src={BurgerMenu} alt='burger' width={20} height={20} />
                </Button>
               
                <div className=' items-center gap-6 hidden md:flex'>
                    <nav className='flex items-center gap-8'>
                        <Link href="/about" className='text-[#A9A9A9]  font-semibold'>
                            About Us
                        </Link>
                        <Link href="/contact" className='text-[#A9A9A9]  font-semibold'>
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;