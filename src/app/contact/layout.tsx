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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
