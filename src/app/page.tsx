import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="mb-4">
            Welcome to Jiuve
          </h1>
          <p className="text-xl md:text-2xl mb-6" style={{ color: 'var(--color-secondary)' }}>
            Custom AI Solutions That Work
          </p>
          <div className="flex gap-4">
            <Button variant="primary">
              Get Started
            </Button>
            <Link href="/components-preview">
              <Button variant="secondary">
                View Components
              </Button>
            </Link>
          </div>
        </section>

        {/* Design System Preview */}
        <section className="mb-16">
          <h2 className="mb-4">Design System Preview</h2>

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
        </section>
      </div>
    </main>
  );
}
