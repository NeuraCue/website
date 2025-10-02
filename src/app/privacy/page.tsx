import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - NeuraCue',
  description: "NeuraCue's privacy policy detailing data use, collection, and contact information.",
  keywords: 'AI reminders, geofencing, productivity, contextual AI, task automation, NeuraCue, privacy policy',
  authors: [{ name: 'NeuraCue Inc.' }],
  openGraph: {
    title: 'Privacy Policy - NeuraCue',
    description: 'AI-powered geofenced reminders and contextual productivity.',
    images: ['/assets/logo.png'],
    url: 'https://neuracue.com/privacy.html',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://neuracue.com/privacy.html',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-blue-100">NeuraCue™</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-12">
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Data Collection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            NeuraCue™ does not collect or store personal data beyond what is necessary for app functionality.
          </p>
        </section>

        <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Third-Party Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Firebase is used for authentication and cloud storage. No data is sold or shared.
          </p>
        </section>

        <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Questions? Email us at{' '}
            <a
              href="mailto:hello@neuracue.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              hello@neuracue.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © 2025 NeuraCue™. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy - NeuraCue',
            url: 'https://neuracue.com/privacy.html',
            description: "NeuraCue's privacy policy detailing data use, collection, and contact information.",
          }),
        }}
      />
    </div>
  );
}
