import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          {/* Logo */}
          <div className="mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Jiuve
            </h2>
          </div>

          {/* Headline */}
          <h1 className="mb-6">
            Custom AI Solutions That Work
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto"
            style={{
              color: 'var(--color-secondary)',
              lineHeight: 'var(--line-height-loose)'
            }}
          >
            We combine strategic thinking with hands-on development to build AI solutions tailored to your business—from concept to deployment.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="primary" className="text-lg px-10 py-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="w-full py-16 md:py-24 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          {/* Section Title */}
          <h2 className="mb-6">
            Solutions, Not Just Advice
          </h2>

          {/* Body Content */}
          <p
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{
              color: 'var(--color-secondary)',
              lineHeight: 'var(--line-height-loose)'
            }}
          >
            We partner with clients from ideation to implementation. Through strategic brainstorming and hands-on software development, we <strong style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>build</strong> complete AI solutions—including <strong style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>hardware integration</strong>—that solve real business challenges.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-secondary)' }}>
              Custom AI solutions designed to solve your unique business challenges
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Logistics Management AI */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)'
              }}
            >
              {/* Icon */}
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
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>

              {/* Headline */}
              <h3 className="mb-3">Logistics Management AI</h3>

              {/* Description */}
              <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>
                Optimize supply chains, routing, and inventory with intelligent automation
              </p>

              {/* Key Features */}
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Route optimization</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Demand forecasting</span>
                </li>
              </ul>
            </div>

            {/* Service 2: AI Agent Integration */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)'
              }}
            >
              {/* Icon */}
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
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>

              {/* Headline */}
              <h3 className="mb-3">AI Agent Integration</h3>

              {/* Description */}
              <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>
                Deploy intelligent agents to automate workflows and enhance productivity
              </p>

              {/* Key Features */}
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Customer service bots</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Process automation</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Intelligent assistants</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Analytics Solutions with AI */}
            <div
              className="p-8 rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-background)'
              }}
            >
              {/* Icon */}
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
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>

              {/* Headline */}
              <h3 className="mb-3">Analytics Solutions with AI</h3>

              {/* Description */}
              <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>
                Transform data into actionable insights with advanced AI-powered analytics
              </p>

              {/* Key Features */}
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Business intelligence dashboards</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Predictive modeling</span>
                </li>
                <li className="flex items-start">
                  <span style={{ color: 'var(--color-accent)' }} className="mr-2">•</span>
                  <span className="text-sm" style={{ color: 'var(--color-secondary)' }}>Real-time reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values/Approach Section */}
      <section className="w-full py-16 md:py-24 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-secondary)' }}>
              Built on principles that deliver exceptional results
            </p>
          </div>

          {/* Values Grid */}
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
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6m5-10.66L14.18 12m-4.36 2.5L7 17.66M1 12h6m6 0h6M3.34 7l2.82 2.82m4.36 4.36L13.34 17"></path>
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
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
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
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h4 className="mb-2">Responsible</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                Ethical AI that serves your business goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="w-full py-16 md:py-24 border-t"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-background-subtle)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          {/* Title */}
          <h2 className="mb-6">
            Ready to Transform Your Business?
          </h2>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            style={{
              color: 'var(--color-secondary)',
              lineHeight: 'var(--line-height-loose)'
            }}
          >
            Let's discuss how Jiuve can build the AI solution you need
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="primary" className="text-lg px-12 py-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
