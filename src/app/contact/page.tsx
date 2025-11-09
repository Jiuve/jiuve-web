import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Jiuve - Let's Build Your AI Solution",
  description: 'Get in touch with Jiuve to discuss your AI solution needs. From logistics to analytics, we build custom solutions.',
  openGraph: {
    title: "Contact Jiuve - Let's Build Your AI Solution",
    description: 'Get in touch with Jiuve to discuss your AI solution needs. From logistics to analytics, we build custom solutions.',
    url: 'https://jiuve.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Jiuve - Let's Build Your AI Solution",
    description: 'Get in touch with Jiuve to discuss your AI solution needs. From logistics to analytics, we build custom solutions.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Contact Us</h1>

        <p className="text-lg mb-8" style={{ color: 'var(--color-secondary)' }}>
          Get in touch with Jiuve to discuss your AI solution needs. From logistics to analytics, we build custom solutions.
        </p>

        <section className="mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2">Email</h3>
              <a
                href="mailto:chunkiet@jiuve.com"
                className="text-lg hover:text-[var(--color-accent)] transition-colors"
                style={{ color: 'var(--color-secondary)' }}
              >
                chunkiet@jiuve.com
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="mb-2">Logistics Management AI</h3>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Supply chain optimization and routing
              </p>
            </div>
            <div>
              <h3 className="mb-2">AI Agent Integration</h3>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Workflow automation and intelligent assistants
              </p>
            </div>
            <div>
              <h3 className="mb-2">Analytics Solutions</h3>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Data transformation and predictive modeling
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
