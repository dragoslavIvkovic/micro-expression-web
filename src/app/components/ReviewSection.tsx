'use client';

import { APP_LINKS } from '../config/links';

interface Review {
    name: string;
    text: string;
    id: string;
}

export default function ReviewSection() {
    const reviews: Review[] = [
        {
            id: 'review1',
            name: 'Alex M.',
            text: "This app has made understanding facial expressions so much simpler. Great for daily practice!"
        },
        {
            id: 'review2',
            name: 'Sarah K.',
            text: 'Love the short training sessions. Perfect for learning micro expressions on the go.'
        },
        {
            id: 'review3',
            name: 'David L.',
            text: 'Simple, effective and well designed. Highly recommend for anyone interested in psychology.'
        }
    ];

    const StarIcon = () => (
        <svg className='h-3 w-3 sm:h-4 sm:w-4 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
    );

    return (
        <section id='reviews' className='bg-white py-12 sm:py-16 md:py-20'>
            <div className='container mx-auto px-4'>
                {/* Header */}
                <div className='mb-8 md:mb-12 text-center'>
                    <span className='mb-4 inline-block rounded-full bg-[#1a1a4e] px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white'>
                        Reviews
                    </span>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a4e]'>
                        What our <span className='text-[#a8b4f0]'>users say</span>
                    </h2>
                    <div className='mt-4 flex items-center justify-center gap-2'>
                        <div className='flex'>
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={`rating-${i}`} />
                            ))}
                        </div>
                        <span className='font-semibold text-sm md:text-base'>4.8/5.0</span>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className='grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'>
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className='rounded-xl md:rounded-2xl bg-[#f5f6fa] p-4 sm:p-6 shadow-md transition-all hover:shadow-xl'
                        >
                            {/* Stars */}
                            <div className='mb-3 md:mb-4 flex'>
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={`${review.id}-star-${i}`} />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className='mb-4 md:mb-6 text-sm md:text-base text-gray-700 leading-relaxed'>"{review.text}"</p>

                            {/* Author */}
                            <div className='flex items-center gap-3'>
                                <div className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#1a1a4e] flex items-center justify-center text-white font-bold text-sm md:text-base'>
                                    {review.name.charAt(0)}
                                </div>
                                <span className='font-semibold text-sm md:text-base text-[#1a1a4e]'>{review.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className='mt-8 md:mt-10 text-center'>
                    <a 
                        href={APP_LINKS.APP_STORE}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-full bg-[#1a1a4e] px-4 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base text-white transition hover:bg-[#a8b4f0] hover:text-[#1a1a4e]'
                    >
                        Download on the App Store
                        <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
