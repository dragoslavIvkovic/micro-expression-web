'use client';

import { useEffect, useState } from 'react';

interface Feature {
    icon: string;
    title: string;
    description: string;
    image: string;
}

export default function KeyFeatureSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const features: Feature[] = [
        {
            icon: '👁️',
            title: 'Micro-Expression Training',
            description:
                'Short, structured exercises designed to help you notice subtle facial movements and emotional signals that often go unnoticed.',
            image: '/images/feature-01.webp'
        },
        {
            icon: '🎯',
            title: 'Visual Learning',
            description:
                'Learn through carefully selected visual examples that improve observation rather than theory memorization.',
            image: '/images/feature-02.webp'
        },
        {
            icon: '📅',
            title: 'Daily Micro Practice',
            description:
                'Designed for daily use — train your perception in minutes, not hours. Build awareness through consistent practice.',
            image: '/images/feature-03.webp'
        },
        {
            icon: '🧠',
            title: 'Awareness & Communication',
            description:
                'Improve emotional awareness and non-verbal communication skills useful in real-world conversations and interactions.',
            image: '/images/feature-04.webp'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % features.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    };

    const getSlideIndex = (offset: number) => {
        return (currentSlide + offset + features.length) % features.length;
    };

    return (
        <section className='py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f5f6fa]'>
            <div className='container mx-auto px-4'>
                {/* Section Header */}
                <div className='mb-8 md:mb-10 text-center'>
                    <span className='rounded-full bg-[#1a1a4e] px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white'>Key Features</span>
                    <h2 className='mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a4e]'>
                        Powerful <span className='text-[#a8b4f0]'>Training Tools</span>
                    </h2>
                </div>

                {/* Text Content Above Slider */}
                <div className='mb-6 md:mb-10 text-center'>
                    <div className='text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3'>{features[currentSlide].icon}</div>
                    <h3 className='mb-2 md:mb-3 text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a4e]'>
                        {features[currentSlide].title}
                    </h3>
                    <p className='mx-auto max-w-xs sm:max-w-lg md:max-w-2xl text-sm md:text-base lg:text-lg text-gray-600 px-2'>{features[currentSlide].description}</p>
                </div>

                {/* 3-Image Carousel Slider */}
                <div className='relative max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto'>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className='absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 md:p-4 shadow-xl transition hover:bg-gray-50 hover:scale-110'
                        aria-label='Previous slide'
                    >
                        <svg className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#1a1a4e]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className='absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 sm:p-3 md:p-4 shadow-xl transition hover:bg-gray-50 hover:scale-110'
                        aria-label='Next slide'
                    >
                        <svg className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#1a1a4e]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                    </button>

                    {/* Carousel with 3 visible images */}
                    <div className='flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-hidden py-4 px-10 sm:px-12 md:px-16'>
                        {/* Left Image - Blurred (hidden on mobile) */}
                        <div className='hidden md:block w-1/4 lg:w-1/5 opacity-50 blur-[3px] scale-90 transition-all duration-500 hover:opacity-60'>
                            <img
                                src={features[getSlideIndex(-1)].image}
                                alt={features[getSlideIndex(-1)].title}
                                className='w-full h-auto rounded-xl lg:rounded-2xl shadow-lg'
                            />
                        </div>

                        {/* Center Image - Active */}
                        <div className='w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 z-10 transition-all duration-500'>
                            <div className='relative'>
                                <img
                                    src={features[currentSlide].image}
                                    alt={features[currentSlide].title}
                                    className='w-full h-auto rounded-2xl lg:rounded-3xl shadow-2xl ring-2 md:ring-4 ring-white/50'
                                />
                                {/* Subtle glow effect */}
                                <div className='absolute inset-0 rounded-2xl lg:rounded-3xl shadow-[0_0_40px_rgba(168,180,240,0.3)] pointer-events-none'></div>
                            </div>
                        </div>

                        {/* Right Image - Blurred (hidden on mobile) */}
                        <div className='hidden md:block w-1/4 lg:w-1/5 opacity-50 blur-[3px] scale-90 transition-all duration-500 hover:opacity-60'>
                            <img
                                src={features[getSlideIndex(1)].image}
                                alt={features[getSlideIndex(1)].title}
                                className='w-full h-auto rounded-xl lg:rounded-2xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* Dots */}
                    <div className='mt-6 md:mt-10 flex justify-center gap-2 md:gap-3'>
                        {features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index ? 'bg-[#1a1a4e] w-6 md:w-10' : 'bg-[#a8b4f0] w-2 md:w-3 hover:bg-[#8a9ae0]'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
