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

            {/* Product Hunt Embed */}
            <div className='container mx-auto px-4 py-6 flex justify-center'>
                <div style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    border: '1px solid rgb(224, 224, 224)',
                    borderRadius: '12px',
                    padding: '20px',
                    maxWidth: '500px',
                    background: 'rgb(255, 255, 255)',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 8px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <img
                            alt="Micro Facial Expressions (iOS)"
                            src="https://ph-files.imgix.net/54ea18e3-9506-49d9-8696-4686c5f05061.png?auto=format&fit=crop&w=80&h=80"
                            style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                flexShrink: 0
                            }}
                        />
                        <div style={{ flex: '1 1 0%', minWidth: '0px' }}>
                            <h3 style={{
                                margin: '0px',
                                fontSize: '18px',
                                fontWeight: 600,
                                color: 'rgb(26, 26, 26)',
                                lineHeight: 1.3,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>Micro Facial Expressions (iOS)</h3>
                            <p style={{
                                margin: '4px 0px 0px',
                                fontSize: '14px',
                                color: 'rgb(102, 102, 102)',
                                lineHeight: 1.4,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical'
                            }}>expression, micro, emotion, emotion tracker, fbi</p>
                        </div>
                    </div>
                    <a
                        href="https://www.producthunt.com/products/micro-facial-expressions-ios?embed=true&utm_source=embed&utm_medium=post_embed"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginTop: '12px',
                            padding: '8px 16px',
                            background: 'rgb(255, 97, 84)',
                            color: 'rgb(255, 255, 255)',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: 600
                        }}
                    >Check it out on Product Hunt →</a>
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
