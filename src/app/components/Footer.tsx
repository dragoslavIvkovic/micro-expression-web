'use client';

import Link from 'next/link';
import { APP_LINKS } from '../config/links';

export default function Footer() {
    return (
        <footer className='bg-[#1a1a4e] text-white'>
            {/* Main Footer */}
            <div className='container mx-auto px-4 py-6 md:py-8'>
                <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between'>
                    {/* Logo and tagline */}
                    <div className='text-center md:text-left'>
                        <h3 className='font-bold text-base md:text-lg'>microfacialexpressions.app</h3>
                        <p className='text-xs md:text-sm text-[#a8b4f0]'>Micro-expression training & awareness</p>
                    </div>

                    {/* Download Icon */}
                    <a
                        href={APP_LINKS.APP_STORE}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='transition hover:opacity-80'
                    >
                        <img 
                            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                            alt="Download on the App Store"
                            className="h-10 md:h-12 w-auto"
                        />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='border-t border-[#a8b4f0]/30 py-3 md:py-4'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-[#a8b4f0]'>
                        <p>© {new Date().getFullYear()} microfacialexpressions.app</p>
                        <ul className='flex flex-wrap justify-center gap-3 md:gap-4'>
                            <li><Link href='/' className='hover:text-white transition-colors'>Home</Link></li>
                            <li><Link href='/about' className='hover:text-white transition-colors'>About</Link></li>
                            <li><Link href='/privacy-policy' className='hover:text-white transition-colors'>Privacy</Link></li>
                            <li><Link href='/terms' className='hover:text-white transition-colors'>Terms</Link></li>
                            <li><Link href='/contact' className='hover:text-white transition-colors'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
