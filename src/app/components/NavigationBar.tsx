'use client';

import { useState } from 'react';
import Link from 'next/link';
import { APP_LINKS } from '../config/links';

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToReviews = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const reviewsSection = document.getElementById('reviews');
        if (reviewsSection) {
            reviewsSection.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className='fixed top-0 right-0 left-0 z-50 border-b border-white/20 bg-[#1a1a4e]'>
            <div className='container mx-auto px-4'>
                <div className='flex h-16 md:h-20 items-center justify-between'>
                    {/* Logo */}
                    <div className='shrink-0'>
                        <Link href='/' className='flex items-center'>
                            <img src='/logo.png' alt='MicroMind Reader Logo' className='h-10 md:h-12 w-auto' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center gap-6'>
                        <div className='flex items-center gap-4 xl:gap-6 text-sm xl:text-base font-medium text-white'>
                            <Link href='/' className='whitespace-nowrap hover:text-[#a8b4f0] transition-colors'>
                                Home
                            </Link>
                            <a href='#reviews' onClick={scrollToReviews} className='whitespace-nowrap hover:text-[#a8b4f0] transition-colors cursor-pointer'>
                                Reviews
                            </a>
                            <Link href='/contact' className='whitespace-nowrap hover:text-[#a8b4f0] transition-colors'>
                                Contact
                            </Link>
                            <Link href='/about' className='whitespace-nowrap hover:text-[#a8b4f0] transition-colors'>
                                About
                            </Link>
                            <Link href='/privacy-policy' className='whitespace-nowrap hover:text-[#a8b4f0] transition-colors'>
                                Privacy
                            </Link>
                            <Link href='/terms' className='whitespace-nowrap hover:text-[#a8b4f0] transition-colors'>
                                Terms
                            </Link>
                        </div>
                        
                        {/* Desktop Store Icon */}
                        <a
                            href={APP_LINKS.APP_STORE}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition hover:scale-105'
                        >
                            <img 
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                                alt="Download on the App Store"
                                className="h-8 xl:h-10 w-auto"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='p-2 text-white lg:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? (
                            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        ) : (
                            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='absolute top-16 md:top-20 right-0 left-0 border-t border-white/10 bg-[#1a1a4e] p-4 shadow-xl lg:hidden'>
                    <div className='flex flex-col space-y-3 text-center text-base font-medium text-white'>
                        <Link 
                            href='/' 
                            className='py-2 hover:bg-white/10 hover:text-[#a8b4f0] rounded-lg'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <a 
                            href='#reviews' 
                            onClick={scrollToReviews} 
                            className='py-2 hover:bg-white/10 hover:text-[#a8b4f0] rounded-lg cursor-pointer'
                        >
                            Reviews
                        </a>
                        <Link 
                            href='/contact' 
                            className='py-2 hover:bg-white/10 hover:text-[#a8b4f0] rounded-lg'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link 
                            href='/about' 
                            className='py-2 hover:bg-white/10 hover:text-[#a8b4f0] rounded-lg'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            href='/privacy-policy' 
                            className='py-2 hover:bg-white/10 hover:text-[#a8b4f0] rounded-lg'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Privacy
                        </Link>
                        <Link 
                            href='/terms' 
                            className='py-2 hover:bg-white/10 hover:text-[#a8b4f0] rounded-lg'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Terms
                        </Link>
                        
                        {/* Mobile Store Icon */}
                        <div className='mt-4 flex justify-center pt-4 border-t border-white/10'>
                            <a
                                href={APP_LINKS.APP_STORE}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img 
                                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                                    alt="Download on the App Store"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
