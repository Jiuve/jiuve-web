'use client';

import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea, Button } from '@/components/ui';

interface FormData {
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Validation functions
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return 'Please enter a valid phone number (at least 10 digits)';
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Please tell us what you\'re looking for';
    }
    if (message.trim().length < 10) {
      return 'Please provide more details (at least 10 characters)';
    }
    return undefined;
  };

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (touched[name] && errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle blur to show validation
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    let error: string | undefined;
    if (name === 'email') {
      error = validateEmail(value);
    } else if (name === 'phone') {
      error = validatePhone(value);
    } else if (name === 'message') {
      error = validateMessage(value);
    }

    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  // Map service values to human-readable names
  const getServiceName = (value: string): string => {
    const serviceMap: { [key: string]: string } = {
      'logistics': 'Logistics Management AI',
      'agents': 'AI Agent Integration',
      'analytics': 'Analytics Solutions with AI',
      'other': 'Other'
    };
    return value ? serviceMap[value] || value : 'Not specified';
  };

  // Retry submission after error
  const handleRetry = () => {
    setSubmissionStatus('idle');
    setErrorMessage('');
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);

    const newErrors: FormErrors = {
      email: emailError,
      phone: phoneError,
      message: messageError,
    };

    // Mark all fields as touched
    setTouched({
      email: true,
      phone: true,
      message: true,
    });

    // If there are errors, set them and don't submit
    if (emailError || phoneError || messageError) {
      setErrors(newErrors);
      return;
    }

    // Send email via EmailJS
    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      // Prepare template parameters
      const templateParams = {
        from_email: formData.email,
        from_phone: formData.phone,
        service_interest: getServiceName(formData.service),
        message: formData.message,
        timestamp: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully:', response);

      // Show success state
      setSubmissionStatus('success');

      // Clear form on success
      setFormData({
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setTouched({});
      setErrors({});

    } catch (error) {
      console.error('Failed to send email:', error);

      // Show error state
      setSubmissionStatus('error');
      setErrorMessage('Sorry, something went wrong while sending your message. Please try again or email us directly.');
    }
  };
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
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your.email@company.com"
                required
                aria-required="true"
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                error={touched.email && errors.email ? errors.email : undefined}
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
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+1 (555) 123-4567"
                required
                aria-required="true"
                aria-invalid={touched.phone && errors.phone ? 'true' : 'false'}
                error={touched.phone && errors.phone ? errors.phone : undefined}
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
                value={formData.service}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your project, challenges, or what you're looking to achieve with AI..."
                rows={6}
                required
                aria-required="true"
                aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                error={touched.message && errors.message ? errors.message : undefined}
              />
              {!(touched.message && errors.message) && (
                <p className="mt-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                  Share details about your business needs, timeline, or any specific requirements.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto md:px-12"
                disabled={submissionStatus === 'submitting' || submissionStatus === 'success'}
              >
                {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            {/* Privacy Note */}
            <p className="text-sm pt-4" style={{ color: 'var(--color-secondary)' }}>
              We'll get back to you within 1-2 business days. Your information is kept confidential.
            </p>
          </form>

          {/* Success Message */}
          {submissionStatus === 'success' && (
            <div
              className="mt-6 p-6 rounded-lg border-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{
                borderColor: 'var(--color-success)',
                backgroundColor: '#F0FDF4'
              }}
            >
              <div className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--color-success)' }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--color-primary)' }}>
                    Thank you for reaching out! We've received your message and will get back to you within 1-2 business days.
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                    Check your email for a confirmation. If you need immediate assistance, feel free to email us at <a href="mailto:chunkiet@jiuve.com" className="underline" style={{ color: 'var(--color-accent)' }}>chunkiet@jiuve.com</a>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submissionStatus === 'error' && (
            <div
              className="mt-6 p-6 rounded-lg border-2 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{
                borderColor: 'var(--color-error)',
                backgroundColor: '#FEF2F2'
              }}
            >
              <div className="flex items-start gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-error)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--color-error)' }}>
                    Oops! Something Went Wrong
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-primary)' }}>
                    {errorMessage}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleRetry}
                      variant="secondary"
                      className="text-sm"
                    >
                      Try Again
                    </Button>
                    <a
                      href="mailto:chunkiet@jiuve.com"
                      className="inline-flex items-center justify-center px-6 py-2 rounded-md border-2 font-semibold text-sm transition-colors"
                      style={{
                        borderColor: 'var(--color-error)',
                        color: 'var(--color-error)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      Email Us Directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
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
