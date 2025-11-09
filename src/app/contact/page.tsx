'use client';

import { Input, Textarea, Button } from '@/components/ui';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Get In Touch</h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-secondary)' }}
          >
            Ready to transform your business with AI? Let's discuss how we can build a custom solution for you.
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="p-8 md:p-12 rounded-lg border"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-background)'
          }}
        >
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                Email <span style={{ color: 'var(--color-error)' }}>*</span>
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@company.com"
                required
                aria-required="true"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                Phone Number <span style={{ color: 'var(--color-error)' }}>*</span>
              </label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                required
                aria-required="true"
              />
            </div>

            {/* Service Interest Dropdown (Optional) */}
            <div>
              <label
                htmlFor="service"
                className="block mb-2 font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                What are you interested in? <span className="text-sm font-normal" style={{ color: 'var(--color-secondary)' }}>(Optional)</span>
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 rounded-md border text-base"
                style={{
                  borderColor: 'var(--color-border-light)',
                  color: 'var(--color-primary)',
                  backgroundColor: 'var(--color-background)',
                  transition: 'var(--transition-fast)'
                }}
              >
                <option value="">Select a service (optional)</option>
                <option value="logistics">Logistics Management AI</option>
                <option value="agents">AI Agent Integration</option>
                <option value="analytics">Analytics Solutions with AI</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message/Requirements Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                What are you looking for? <span style={{ color: 'var(--color-error)' }}>*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, challenges, or what you're looking to achieve with AI..."
                rows={6}
                required
                aria-required="true"
              />
              <p className="mt-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                Share details about your business needs, timeline, or any specific requirements.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto md:px-12"
              >
                Send Message
              </Button>
            </div>

            {/* Privacy Note */}
            <p className="text-sm pt-4" style={{ color: 'var(--color-secondary)' }}>
              We'll get back to you within 1-2 business days. Your information is kept confidential.
            </p>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="mb-2" style={{ color: 'var(--color-secondary)' }}>
            Prefer email?
          </p>
          <a
            href="mailto:chunkiet@jiuve.com"
            className="text-lg font-medium hover:underline transition-colors"
            style={{ color: 'var(--color-accent)' }}
          >
            chunkiet@jiuve.com
          </a>
        </div>
      </div>
    </main>
  );
}
