import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Jiuve - Making Enterprise AI Accessible',
  description: "Discover Jiuve's mission to make AI work for mid-sized businesses. We deliver practical, business-focused solutions from ideation to deployment.",
  openGraph: {
    title: 'About Jiuve - Making Enterprise AI Accessible',
    description: "Discover Jiuve's mission to make AI work for mid-sized businesses. We deliver practical, business-focused solutions from ideation to deployment.",
    url: 'https://jiuve.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Jiuve - Making Enterprise AI Accessible',
    description: "Discover Jiuve's mission to make AI work for mid-sized businesses. We deliver practical, business-focused solutions from ideation to deployment.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Transforming Business Challenges into AI Opportunities</h1>
            <p
              className="text-lg md:text-xl"
              style={{ color: 'var(--color-secondary)' }}
            >
              We deliver practical, business-focused AI solutions that drive real results—from strategic ideation to full-scale deployment and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-6">Our Mission</h2>
              <p
                className="text-xl md:text-2xl font-semibold"
                style={{ color: 'var(--color-accent)' }}
              >
                Making Enterprise AI Accessible and Actionable
              </p>
            </div>

            <div className="space-y-6 text-lg" style={{ color: 'var(--color-primary)' }}>
              <p>
                We believe AI should solve real business problems, not create new ones. Our mission is to bridge the gap between AI potential and practical implementation, delivering solutions that drive measurable results from day one.
              </p>
              <p>
                At Jiuve, we partner with mid-sized businesses and corporations to transform AI aspirations into reality—combining strategic thinking with hands-on development to create solutions that actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-secondary)' }}
            >
              Four principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1: Practical Over Theoretical */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Practical Over Theoretical</h3>
              <div className="space-y-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <p>We focus on solutions that work in the real world, not just in research papers</p>
                <p>Every implementation is measured by business impact, not technical complexity</p>
              </div>
            </div>

            {/* Value 2: Partnership Over Consulting */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Partnership Over Consulting</h3>
              <div className="space-y-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <p>We don't just advise—we build, deploy, and support</p>
                <p>Your success is our success; we're invested in long-term outcomes</p>
              </div>
            </div>

            {/* Value 3: Domain Expertise Matters */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Domain Expertise Matters</h3>
              <div className="space-y-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <p>We understand your industry before we propose solutions</p>
                <p>AI is the tool, not the answer</p>
              </div>
            </div>

            {/* Value 4: Sustainable Innovation */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Sustainable Innovation</h3>
              <div className="space-y-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <p>Solutions designed for longevity and scalability</p>
                <p>Training and knowledge transfer are built into every project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Sets Us Apart</h2>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'var(--color-secondary)' }}
            >
              More than consultants, more than developers—we're your complete AI partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Differentiator 1: Full-Stack AI Implementation */}
            <div
              className="p-8 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Full-Stack AI Implementation</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>From ideation workshops to production deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Hardware integration, software development, and ongoing support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>One partner for your entire AI journey</span>
                </li>
              </ul>
            </div>

            {/* Differentiator 2: Business-First Approach */}
            <div
              className="p-8 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Business-First Approach</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Start with ROI goals, not AI capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Solutions tailored to your industry, scale, and constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Measurable outcomes defined before development begins</span>
                </li>
              </ul>
            </div>

            {/* Differentiator 3: Mid-Market Specialists */}
            <div
              className="p-8 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <div className="mb-6" aria-hidden="true">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-highlight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Mid-Market Specialists</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--color-secondary)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Purpose-built for mid-sized businesses and corporations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Enterprise-grade solutions without enterprise complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: 'var(--color-accent)' }}>•</span>
                  <span>Pricing and timelines designed for your reality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-6">Our Commitment</h2>
            </div>

            <div
              className="p-8 md:p-12 rounded-lg border"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <p className="text-lg mb-6" style={{ color: 'var(--color-primary)' }}>
                We're committed to responsible AI deployment that:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start text-base md:text-lg">
                  <svg
                    className="mr-3 mt-1 flex-shrink-0"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'var(--color-primary)' }}>
                    Augments human capabilities rather than replacing them
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <svg
                    className="mr-3 mt-1 flex-shrink-0"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'var(--color-primary)' }}>
                    Respects data privacy and security
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <svg
                    className="mr-3 mt-1 flex-shrink-0"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'var(--color-primary)' }}>
                    Delivers transparent, explainable results
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg">
                  <svg
                    className="mr-3 mt-1 flex-shrink-0"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ color: 'var(--color-primary)' }}>
                    Creates measurable business value
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-background-subtle)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-6">Why We Exist</h2>
            </div>

            <div
              className="p-8 md:p-12 rounded-lg border text-center"
              style={{
                borderColor: 'var(--color-accent)',
                backgroundColor: 'var(--color-background)',
              }}
            >
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                We exist to make AI work for mid-sized businesses. We combine deep technical expertise with hands-on implementation,
                delivering complete AI solutions from ideation through deployment. Our approach is simple: understand your business,
                build what actually works, and ensure you can sustain it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
