import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - microfacialexpressions.app',
    description: 'Read the MicroMind Reader Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <main className='flex min-h-screen flex-col items-center p-8 md:p-24'>
            <div className='w-full max-w-4xl rounded-lg bg-white p-8 text-[#1a1a4e] shadow-xl'>
                <h1 className='mb-2 text-4xl font-bold'>Privacy Policy</h1>
                <p className='mb-8 text-gray-500'>Last Updated: January 1, 2025</p>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>1. Introduction</h2>
                    <p className='mb-4 leading-relaxed text-gray-700'>
                        This Privacy Policy describes how MicroMind Reader ("we," "our," or "the App") collects, uses, and discloses your information. We are committed to respecting your privacy.
                    </p>
                    <div className='rounded-lg bg-indigo-50 p-4 border-l-4 border-indigo-400'>
                        <p className='text-gray-700'>
                            <strong>Important:</strong> We do not require you to create an account, and we do not collect your name, email address, or phone number. You can use the App without providing any personally identifiable information.
                        </p>
                    </div>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>2. Information We Collect</h2>
                    <p className='mb-4 text-gray-700'>
                        Since we do not offer user accounts, we collect very limited data needed solely for the functionality, stability, and improvement of the App.
                    </p>
                    <div className='rounded-lg bg-gray-50 p-6'>
                        <h3 className='mb-3 text-lg font-medium'>a) Device Information (Automatically Collected)</h3>
                        <p className='mb-3 text-gray-700'>When you use the App, we may collect certain technical information about your device, including:</p>
                        <ul className='list-inside list-disc space-y-2 text-gray-700'>
                            <li>Device model and iOS version</li>
                            <li>Unique Device Identifiers (such as the IDFV or a randomly generated App User ID)</li>
                            <li>Crash data and performance logs</li>
                        </ul>
                    </div>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>3. How We Use Your Information</h2>
                    <div className='rounded-lg bg-gray-50 p-6'>
                        <p className='mb-3 text-gray-700'>We use the collected data for the following purposes:</p>
                        <ul className='list-inside list-disc space-y-2 text-gray-700'>
                            <li><strong>App Functionality:</strong> To handle your subscription status and unlock premium features.</li>
                            <li><strong>Analytics:</strong> To understand how users interact with the App so we can improve the user experience.</li>
                            <li><strong>Debugging:</strong> To identify and fix crashes or bugs.</li>
                        </ul>
                    </div>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>4. Third-Party Services</h2>
                    <p className='mb-4 text-gray-700'>
                        We use trusted third-party services to help us operate and maintain the App. These services may access the limited data described above (Device IDs, Crash Logs) but do not have access to your personal identity.
                    </p>
                    <div className='space-y-4'>
                        <div className='rounded-lg bg-gray-50 p-4'>
                            <h3 className='font-medium text-gray-900'>RevenueCat</h3>
                            <p className='text-gray-700'>We use RevenueCat to manage subscriptions and in-app purchases. They process purchase tokens to verify your premium status.</p>
                            <a href='https://www.revenuecat.com/privacy' target='_blank' rel='noopener noreferrer' className='text-indigo-500 hover:underline text-sm'>RevenueCat Privacy Policy →</a>
                        </div>
                        <div className='rounded-lg bg-gray-50 p-4'>
                            <h3 className='font-medium text-gray-900'>PostHog</h3>
                            <p className='text-gray-700'>We use PostHog for product analytics to understand which features are used most. This helps us improve the App.</p>
                            <a href='https://posthog.com/privacy' target='_blank' rel='noopener noreferrer' className='text-indigo-500 hover:underline text-sm'>PostHog Privacy Policy →</a>
                        </div>
                        <div className='rounded-lg bg-gray-50 p-4'>
                            <h3 className='font-medium text-gray-900'>Sentry</h3>
                            <p className='text-gray-700'>We use Sentry to report crashes and errors. If the App crashes, Sentry receives a technical log helping us fix the issue.</p>
                            <a href='https://sentry.io/privacy/' target='_blank' rel='noopener noreferrer' className='text-indigo-500 hover:underline text-sm'>Sentry Privacy Policy →</a>
                        </div>
                    </div>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>5. Data Retention</h2>
                    <p className='text-gray-700'>
                        We retain technical data only as long as necessary to fulfill the purposes described in this policy. Since we do not have user accounts, we cannot link this data to you personally in the real world.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>6. Children's Privacy</h2>
                    <p className='text-gray-700'>
                        The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>7. Changes to This Policy</h2>
                    <p className='text-gray-700'>
                        We may update our Privacy Policy from time to time. You are advised to review this page periodically for any changes.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>8. Contact Us</h2>
                    <p className='text-gray-700'>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:{' '}
                        <a href='mailto:ivkemilioner2@gmail.com' className='text-indigo-500 hover:underline'>
                            ivkemilioner2@gmail.com
                        </a>
                    </p>
                </section>

                <div className='mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500'>
                    <p>© 2025 Dragoslav Ivkovic. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
