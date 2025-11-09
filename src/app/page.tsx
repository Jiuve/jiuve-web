import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
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

      {/* Temporary Design System Preview - To be removed later */}
      <section className="w-full py-16 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="mb-4">Design System Preview</h2>
            <p style={{ color: 'var(--color-secondary)' }}>
              Temporary section for development reference
            </p>
            <Link href="/components-preview" className="inline-block mt-4">
              <Button variant="secondary">
                View All Components
              </Button>
            </Link>
          </div>

          {/* Colors */}
          <div className="mb-8">
            <h3 className="mb-4">Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                <p className="text-sm">Primary</p>
              </div>
              <div>
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
                <p className="text-sm">Secondary</p>
              </div>
              <div>
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <p className="text-sm">Accent</p>
              </div>
              <div>
                <div className="w-full h-20 rounded-lg mb-2" style={{ backgroundColor: 'var(--color-highlight)' }}></div>
                <p className="text-sm">Highlight</p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-8">
            <h3 className="mb-4">Typography</h3>
            <div className="space-y-2">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <p className="text-base">Body text with comfortable line height for readability.</p>
              <p className="text-sm">Small text for secondary information.</p>
            </div>
          </div>

          {/* Spacing */}
          <div className="mb-8">
            <h3 className="mb-4">Spacing System (8px grid)</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="text-sm">xs: 4px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-8" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="text-sm">sm: 8px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-8" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="text-sm">md: 16px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-8" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="text-sm">lg: 24px</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="text-sm">xl: 32px</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
