import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Jiuve - Powering the AI Era',
  description: "Learn about Jiuve's mission to power the new AI era through custom and innovative solutions.",
  openGraph: {
    title: 'About Jiuve - Powering the AI Era',
    description: "Learn about Jiuve's mission to power the new AI era through custom and innovative solutions.",
    url: 'https://jiuve.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Jiuve - Powering the AI Era',
    description: "Learn about Jiuve's mission to power the new AI era through custom and innovative solutions.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">About Jiuve</h1>

        <section className="mb-12">
          <h2 className="mb-4">Our Mission</h2>
          <p className="text-lg mb-4" style={{ color: 'var(--color-secondary)' }}>
            Help power the new AI era through custom and innovative solutions.
          </p>
          <p className="mb-4">
            Jiuve is a software engineering firm that differentiates itself from traditional consulting firms by providing
            full-service AI solutions from brainstorming to deployment. We don't just consult—we build.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4">Our Approach</h2>
          <p className="mb-4">
            Our approach combines strategic ideation and brainstorming, hands-on software development,
            hardware integration capabilities, and end-to-end implementation and deployment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-2">Innovative</h3>
              <p style={{ color: 'var(--color-secondary)' }}>
                Cutting-edge solutions tailored to your needs
              </p>
            </div>
            <div>
              <h3 className="mb-2">Quality-Focused</h3>
              <p style={{ color: 'var(--color-secondary)' }}>
                Excellence in every line of code
              </p>
            </div>
            <div>
              <h3 className="mb-2">Minimalistic</h3>
              <p style={{ color: 'var(--color-secondary)' }}>
                Clean, efficient designs that work
              </p>
            </div>
            <div>
              <h3 className="mb-2">Efficient</h3>
              <p style={{ color: 'var(--color-secondary)' }}>
                Fast delivery without compromising standards
              </p>
            </div>
            <div>
              <h3 className="mb-2">Responsible</h3>
              <p style={{ color: 'var(--color-secondary)' }}>
                Ethical AI that serves your business goals
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
