'use client';

import { useState } from 'react';
import { Button, Card, Input, Textarea } from '@/components/ui';

export default function ComponentsPreview() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-8">Component Library Preview</h1>
        <p className="mb-12 text-lg" style={{ color: 'var(--color-secondary)' }}>
          Interactive preview of all base components following the design system specifications.
        </p>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="mb-6">Buttons</h2>

          <div className="mb-8">
            <h3 className="mb-4">Primary Button</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4">Secondary Button</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary">Learn More</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="mb-6">Cards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="mb-4">Service Card 1</h3>
              <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>
                This is a card with hover effects. Hover to see the elevation change and border color.
              </p>
              <ul className="space-y-2">
                <li className="text-sm">• Feature one</li>
                <li className="text-sm">• Feature two</li>
                <li className="text-sm">• Feature three</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-4">Service Card 2</h3>
              <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>
                Cards have subtle shadows that elevate on hover for a modern, interactive feel.
              </p>
              <ul className="space-y-2">
                <li className="text-sm">• Feature one</li>
                <li className="text-sm">• Feature two</li>
                <li className="text-sm">• Feature three</li>
              </ul>
            </Card>

            <Card>
              <h3 className="mb-4">Service Card 3</h3>
              <p className="mb-4" style={{ color: 'var(--color-secondary)' }}>
                All cards are equal height and responsive across different screen sizes.
              </p>
              <ul className="space-y-2">
                <li className="text-sm">• Feature one</li>
                <li className="text-sm">• Feature two</li>
                <li className="text-sm">• Feature three</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8">
            <h3 className="mb-4">Card Without Hover</h3>
            <Card hover={false}>
              <p style={{ color: 'var(--color-secondary)' }}>
                This card has hover effects disabled using the <code>hover=false</code> prop.
              </p>
            </Card>
          </div>
        </section>

        {/* Form Inputs Section */}
        <section className="mb-16">
          <h2 className="mb-6">Form Inputs</h2>

          <div className="max-w-2xl space-y-6">
            <div>
              <h3 className="mb-4">Text Input - Default</h3>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-4">Text Input - Error State</h3>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                error="Please enter a valid email address"
              />
            </div>

            <div>
              <h3 className="mb-4">Text Input - Success State</h3>
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value="user@example.com"
                success
              />
            </div>

            <div>
              <h3 className="mb-4">Textarea - Default</h3>
              <Textarea
                label="Message"
                placeholder="Tell us what you're looking for..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-4">Textarea - Error State</h3>
              <Textarea
                label="Message"
                placeholder="Tell us what you're looking for..."
                error="Message must be at least 10 characters"
              />
            </div>

            <div>
              <h3 className="mb-4">Textarea - Success State</h3>
              <Textarea
                label="Message"
                placeholder="Tell us what you're looking for..."
                value="This is a valid message with enough characters."
                success
              />
            </div>

            <div>
              <h3 className="mb-4">Interactive Validation Demo</h3>
              <div className="space-y-4">
                <Input
                  label="Test Input"
                  placeholder="Type something..."
                  error={showError ? "This is an error message" : undefined}
                  success={showSuccess}
                />
                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShowError(!showError);
                      setShowSuccess(false);
                    }}
                  >
                    Toggle Error
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShowSuccess(!showSuccess);
                      setShowError(false);
                    }}
                  >
                    Toggle Success
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="mb-16">
          <h2 className="mb-6">Complete Form Example</h2>

          <Card hover={false} className="max-w-2xl">
            <h3 className="mb-6">Contact Form</h3>
            <form className="space-y-6">
              <Input
                label="Email *"
                type="email"
                placeholder="your@email.com"
                required
              />
              <Input
                label="Phone Number *"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
              />
              <Textarea
                label="What are you looking for? *"
                placeholder="Tell us about your project..."
                required
              />
              <div className="flex gap-4">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={() => window.location.href = '/'}>
              ← Back to Home
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
