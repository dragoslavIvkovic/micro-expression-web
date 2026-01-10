'use client';

import { useEffect, useState } from 'react';
import { APP_LINKS } from '../config/links';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const slides = [
        '/images/slider/slide-01.webp',
        '/images/slider/slide-02.webp',
        '/images/slider/slide-03.webp',
        '/images/slider/slide-04.webp',
        '/images/slider/slide-05.webp',
        '/images/slider/slide-06.webp',
        '/images/slider/slide-07.webp',
        '/images/slider/slide-08.webp'
    ];

    useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className='relative px-4 py-8 md:py-12 bg-[#1a1a4e] overflow-hidden'>
            {/* Animated background elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#a8b4f0]/20 rounded-full blur-3xl animate-pulse' />
                <div className='absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#a8b4f0]/20 rounded-full blur-3xl animate-pulse delay-1000' />
            </div>

            <div className='container mx-auto px-4 relative z-10'>
                <div className='grid gap-8 md:grid-cols-2 md:items-center'>
                    {/* Left Column - Text Content */}
                    <div className={`z-10 space-y-4 md:space-y-6 text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
                            <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                Train Your Eye to
                            </span>
                            <br />
                            <span className={`inline-block text-[#a8b4f0] transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                Notice What Others Miss
                            </span>
                        </h1>
                        <p className={`text-base md:text-lg text-gray-300 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            Learn to recognize subtle facial movements and improve your emotional awareness through short, focused micro-expression training sessions.
                        </p>

                        {/* CTA Section */}
                        <div className={`space-y-2 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <div>
                                <h2 className='text-lg md:text-xl font-bold'>TRY FOR FREE</h2>
                                <p className='text-sm md:text-base text-gray-300'>
                                    Sharpen your perception with daily micro-expression training
                                </p>
                            </div>
                        </div>

                        {/* Download Button */}
                        <div className={`space-y-2 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <span className='inline-block text-base md:text-lg'>Download</span>
                            <div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
                                <a
                                    href={APP_LINKS.APP_STORE}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block transition-all duration-300 hover:scale-105 hover:opacity-90'
                                >
                                    <img 
                                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1502323200" 
                                        alt="Download on the App Store"
                                        className="h-12 md:h-14 w-auto"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - App Screenshot */}
                    <div className={`relative z-10 block transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className='relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md'>
                            {/* Floating phone effect */}
                            <div className='animate-float'>
                                {/* App Screenshots Slider */}
                                <div className='relative aspect-[9/19] w-full'>
                                    {slides.map((slide, index) => (
                                        <img
                                            key={slide}
                                            src={slide}
                                            alt={`App Screenshot ${index + 1}`}
                                            className={`absolute inset-0 z-10 h-full w-full object-contain transition-all duration-700 ${
                                                currentSlide === index 
                                                    ? 'opacity-100 scale-100' 
                                                    : 'opacity-0 scale-95'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Slider Dots */}
                            <div className='absolute -bottom-6 left-1/2 z-30 flex -translate-x-1/2 transform space-x-2'>
                                {slides.map((_, index) => (
                                    <button
                                        type='button'
                                        key={`slide-${index + 1}`}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            currentSlide === index 
                                                ? 'bg-[#a8b4f0] w-6' 
                                                : 'bg-white/50 w-2 hover:bg-white/70'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
