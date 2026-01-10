import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './components/ScrollToTop';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://microfacialexpressions.app'),
    title: {
        default: 'Micro Facial Expressions Training App | MicroMind Reader',
        template: '%s | MicroMind Reader',
    },
    description:
        'Train your ability to recognize micro facial expressions with short, focused exercises. Improve emotional awareness using a modern iOS training app.',
    keywords: [
        'micro facial expressions',
        'micro expression training',
        'facial expression recognition app',
        'nonverbal communication',
        'emotional awareness',
        'body language',
        'psychology training',
        'iOS app',
    ],
    authors: [{ name: 'Dragoslav Ivkovic' }],
    creator: 'microfacialexpressions.app',
    publisher: 'microfacialexpressions.app',
    alternates: {
        canonical: 'https://microfacialexpressions.app/',
    },
    openGraph: {
        title: 'Micro Facial Expressions Training App | MicroMind Reader',
        description:
            'Train perception and emotional awareness through micro-expression practice on iOS.',
        url: 'https://microfacialexpressions.app',
        siteName: 'MicroMind Reader',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'MicroMind Reader - Micro Facial Expressions Training App',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Micro Facial Expressions Training App | MicroMind Reader',
        description:
            'Train perception and emotional awareness through micro-expression practice on iOS.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                {/* Apple Smart App Banner */}
                <meta name='apple-itunes-app' content='app-id=6756545872' />
                {/* Structured Data */}
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'MobileApplication',
                            name: 'MicroMind Reader',
                            description:
                                'Train your ability to recognize micro facial expressions with short, focused exercises.',
                            applicationCategory: 'EducationApplication',
                            operatingSystem: 'iOS',
                            url: 'https://microfacialexpressions.app',
                            offers: {
                                '@type': 'Offer',
                                price: '0',
                                priceCurrency: 'USD',
                            },
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: '4.8',
                                ratingCount: '1399',
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'microfacialexpressions.app',
                            },
                        }),
                    }}
                />
            </head>
            <body className={`min-h-screen bg-[#f5f6fa] ${poppins.className}`}>
                <NavigationBar />
                <div className='pt-16 md:pt-20'>{children}</div>
                <ScrollToTop />
            </body>
        </html>
    );
}
