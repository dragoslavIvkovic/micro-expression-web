import type { Metadata } from 'next';
import { APP_LINKS } from '../config/links';

export const metadata: Metadata = {
    title: 'About Us - microfacialexpressions.app',
    description: 'Learn about MicroMind Reader, the iOS app dedicated to helping you train micro-expression recognition and improve emotional awareness.',
};

export default function About() {
    return (
        <main className='flex min-h-screen flex-col items-center'>
            {/* Hero Section */}
            <section className='w-full py-16 bg-linear-to-b from-[#1a1a4e] to-[#12123a]'>
                <div className='container mx-auto px-4 text-center'>
                    <span className='mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm'>About us</span>
                    <h1 className='mb-6 text-4xl font-bold text-white md:text-5xl'>
                        Training Perception Skills <br />
                        <span className='text-[#a8b4f0]'>Made Simple and Effective</span>
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-300'>
                        MicroMind Reader is dedicated to helping you sharpen your perception skills by training attention to subtle facial movements that often go unnoticed in everyday interactions.
                    </p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className='w-full py-16 bg-[#f5f6fa]'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                        {[
                            { number: '150+', label: 'Countries' },
                            { number: '2300+', label: 'Reviews' },
                            { number: '8M+', label: 'Followers' }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className='rounded-xl bg-white p-8 text-center shadow-lg transition-transform hover:scale-105'>
                                <p className='mb-2 text-3xl font-bold text-[#1a1a4e]'>
                                    {stat.number}
                                </p>
                                <p className='text-gray-600'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full py-16 bg-white'>
                <div className='container mx-auto px-4'>
                    <h2 className='mb-12 text-center text-3xl font-bold text-[#1a1a4e]'>
                        Why Choose MicroMind Reader
                    </h2>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                        {[
                            {
                                title: 'User Friendly',
                                description: 'Intuitive interface designed for easy navigation and focused learning'
                            },
                            {
                                title: 'Visual Learning',
                                description: 'Learn through carefully selected visual examples that improve observation skills'
                            },
                            {
                                title: 'Daily Practice',
                                description: 'Train your perception in minutes, not hours — designed for daily micro-practice'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className='rounded-xl bg-gray-50 p-8 shadow-lg transition-transform hover:scale-105'>
                                <h3 className='mb-4 text-xl font-semibold text-[#1a1a4e]'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600'>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='w-full py-16 bg-linear-to-t from-[#1a1a4e] to-[#12123a]'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='mb-6 text-3xl font-bold text-white'>Start Training Your Perception Today</h2>
                    <p className='mb-8 text-gray-300'>
                        Develop a sharper eye for facial expressions and emotional cues with daily practice
                    </p>
                    <a
                        href={APP_LINKS.APP_STORE}
                        className='rounded-full bg-white px-8 py-3 font-semibold text-[#1a1a4e] transition-colors hover:bg-gray-100'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Download on the App Store
                    </a>
                </div>
            </section>
        </main>
    );
}
