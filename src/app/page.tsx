'use client';

import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import KeyFeatureSection from './components/KeyFeatureSection';
import ReviewSection from './components/ReviewSection';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col'>
            {/* Hero Section */}
            <div className='bg-linear-to-b from-[#1a1a4e] to-[#12123a]'>
                <HeroSection />
            </div>

            {/* Key Features */}
            <KeyFeatureSection />

            {/* Review Section */}
            <ReviewSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
