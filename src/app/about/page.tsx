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
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="mb-4">About Jiuve</h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-secondary)' }}
          >
            Building custom AI solutions that transform businesses from concept to deployment
          </p>
        </div>

        {/* Founder Information Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Founder Photo */}
            <div className="lg:col-span-1">
              <div
                className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-background-subtle)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Placeholder for founder photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-border-light)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="mb-2">Meet the Founder</h2>
                <h3 style={{ color: 'var(--color-accent)' }}>[Founder Name]</h3>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg" style={{ color: 'var(--color-primary)' }}>
                  [Founder bio paragraph 1: Background and experience. For example, "With over 10 years of experience in software engineering and AI development, [Founder Name] has led numerous successful projects transforming how businesses leverage artificial intelligence."]
                </p>

                <p className="text-base md:text-lg" style={{ color: 'var(--color-primary)' }}>
                  [Founder bio paragraph 2: Previous work and achievements. For example, "Before founding Jiuve, [Name] worked with Fortune 500 companies implementing machine learning solutions that drove measurable business impact. Their work has spanned logistics optimization, predictive analytics, and intelligent automation systems."]
                </p>

                <p className="text-base md:text-lg" style={{ color: 'var(--color-primary)' }}>
                  [Founder bio paragraph 3: Vision and why Jiuve exists. For example, "The vision for Jiuve emerged from seeing a gap between AI consulting advice and actual implementation. Too many businesses receive strategic recommendations without the technical execution to bring them to life. Jiuve bridges that gap by providing end-to-end AI solutions from ideation to deployment."]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Mission Section */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Our Mission</h2>
              <p
                className="text-xl md:text-2xl font-semibold mb-6"
                style={{ color: 'var(--color-accent)' }}
              >
                Help power the new AI era through custom and innovative solutions
              </p>
            </div>

            <div
              className="p-8 md:p-12 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background-subtle)',
              }}
            >
              <p className="text-lg mb-6" style={{ color: 'var(--color-primary)' }}>
                Jiuve is a software engineering firm that differentiates itself from traditional consulting firms by providing
                full-service AI solutions from brainstorming to deployment. We don't just consult—we build.
              </p>

              <p className="text-lg" style={{ color: 'var(--color-primary)' }}>
                Our approach combines strategic ideation and brainstorming, hands-on software development,
                hardware integration capabilities, and end-to-end implementation and deployment. We partner with
                mid-sized businesses and corporations to turn AI aspirations into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-secondary)' }}
            >
              Built on principles that deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Value 1: Innovative */}
            <div className="text-center">
              <div className="mb-4 flex justify-center" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h4 className="mb-2">Innovative</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Cutting-edge solutions tailored to your needs
              </p>
            </div>

            {/* Value 2: Quality-Focused */}
            <div className="text-center">
              <div className="mb-4 flex justify-center" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h4 className="mb-2">Quality-Focused</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Excellence in every line of code
              </p>
            </div>

            {/* Value 3: Minimalistic */}
            <div className="text-center">
              <div className="mb-4 flex justify-center" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <h4 className="mb-2">Minimalistic</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Clean, efficient designs that work
              </p>
            </div>

            {/* Value 4: Efficient */}
            <div className="text-center">
              <div className="mb-4 flex justify-center" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </div>
              <h4 className="mb-2">Efficient</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Fast delivery without compromising standards
              </p>
            </div>

            {/* Value 5: Responsible */}
            <div className="text-center">
              <div className="mb-4 flex justify-center" aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4 className="mb-2">Responsible</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Ethical AI that serves your business goals
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
