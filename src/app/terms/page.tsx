import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - microfacialexpressions.app',
    description: 'Terms of Service for MicroMind Reader. Learn about the rules and conditions for using our micro-expression training app.',
};

export default function TermsOfService() {
    return (
        <main className='flex min-h-screen flex-col items-center p-8 md:p-24'>
            <div className='w-full max-w-4xl rounded-lg bg-white p-8 text-[#1a1a4e] shadow-xl'>
                <h1 className='mb-2 text-4xl font-bold'>Terms of Service</h1>
                <p className='mb-8 text-gray-500'>Last Updated: December 18, 2025</p>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>1. Acceptance of Terms</h2>
                    <p className='leading-relaxed text-gray-700'>
                        By downloading or using MicroMind Reader, you agree to be bound by these Terms of Service and our Privacy Policy.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>2. Use of Service</h2>
                    <p className='leading-relaxed text-gray-700'>
                        You agree to use the app only for its intended purpose: learning and analyzing micro-expressions/cognitive psychology. You may not attempt to decompile or reverse-engineer the software.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>3. Subscriptions and Purchases</h2>
                    <div className='rounded-lg bg-gray-50 p-6'>
                        <ul className='list-inside list-disc space-y-3 text-gray-700'>
                            <li>Payments will be charged to your Apple ID account at the confirmation of purchase.</li>
                            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
                            <li>You can manage and cancel your subscriptions in your Account Settings on the App Store.</li>
                        </ul>
                    </div>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>4. Disclaimer of Warranties</h2>
                    <p className='leading-relaxed text-gray-700'>
                        MicroMind Reader is provided "as is" without any warranties. The app is intended for educational/entertainment purposes and should not be used for professional psychological diagnosis or legal testimony.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>5. Limitation of Liability</h2>
                    <p className='leading-relaxed text-gray-700'>
                        To the maximum extent permitted by law, MicroMind Reader shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the app.
                    </p>
                </section>

                <section className='mb-12'>
                    <h2 className='mb-4 text-2xl font-semibold'>6. Contact Us</h2>
                    <p className='text-gray-700'>
                        If you have any questions about these Terms, please contact us at{' '}
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
