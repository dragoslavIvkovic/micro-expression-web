import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import '@/app/globals.css';

import NavigationBar from './components/NavigationBar';
import ScrollToTop from './components/ScrollToTop';

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
    title: 'Micro Facial Expressions Training App for iOS | MicroMind Reader',
    description:
        'Train your ability to recognize micro facial expressions with short, focused exercises. Improve emotional awareness and perception using a modern iOS training app.',
    metadataBase: new URL('https://microfacialexpressions.app'),
    openGraph: {
        title: 'MicroMind Reader – Micro Expression Training App',
        description:
            'Train your ability to recognize micro facial expressions with short, focused exercises. Improve emotional awareness and perception using a modern iOS training app.',
        url: 'https://microfacialexpressions.app',
        siteName: 'microfacialexpressions.app',
        images: [
            {
                url: 'https://microfacialexpressions.app/images/slider/slide-01.webp',
                width: 800,
                height: 600
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MicroMind Reader – Micro Expression Training App',
        description:
            'Train your ability to recognize micro facial expressions with short, focused exercises. Improve emotional awareness and perception using a modern iOS training app.',
        images: ['https://microfacialexpressions.app/images/slider/slide-01.webp']
    },
    alternates: {
        canonical: 'https://microfacialexpressions.app'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta name="p:domain_verify" content="157b1f4deed124fa6508549e0e363960"/>
                <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=G-9PGSFLM2FM`} />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-9PGSFLM2FM', {
                            send_page_view: false,
                            transport_type: 'beacon',
                        });
                    `}
                </Script>
                <Script
                    id='structured-data'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebApplication',
                            name: 'MicroMind Reader',
                            description: 'Train your ability to recognize micro facial expressions with short, focused exercises. Improve emotional awareness and perception.',
                            applicationCategory: 'EducationApplication',
                            operatingSystem: 'iOS',
                            aggregateRating: {
                                '@type': 'AggregateRating',
                                ratingValue: '4.5',
                                reviewCount: '1399'
                            },
                            offers: {
                                '@type': 'Offer',
                                price: '0',
                                priceCurrency: 'USD'
                            },
                            url: 'https://microfacialexpressions.app',
                            image: 'https://microfacialexpressions.app/images/slider/slide-01.webp',
                            publisher: {
                                '@type': 'Organization',
                                name: 'microfacialexpressions.app',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: 'https://microfacialexpressions.app/logo.svg'
                                }
                            }
                        })
                    }}
                />
            </head>
            <body className={`min-h-screen bg-[#f5f6fa] ${poppins.className}`}>
                <NavigationBar />
                <div className='pt-16'>{children}</div>
                <ScrollToTop />
            </body>
        </html>
    );
}
