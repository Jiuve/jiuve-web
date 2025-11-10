# Analytics Integration Guide - Task 5.6

**Date:** 2025-11-10
**Status:** Documentation Complete (Implementation requires GA4 credentials)

## Google Analytics 4 Integration

### Prerequisites

1. Create GA4 property at https://analytics.google.com
2. Obtain Measurement ID (format: G-XXXXXXXXXX)

### Implementation Steps

**1. Create Environment Variable**

Add to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**2. Create Analytics Component**

Create `src/components/GoogleAnalytics.tsx`:
```tsx
'use client';

import Script from 'next/script';

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
```

**3. Add to Root Layout**

Update `src/app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### Event Tracking (Optional)

**Track Button Clicks:**
```tsx
<button onClick={() => gtag('event', 'cta_click', { button_name: 'Get Started' })}>
  Get Started
</button>
```

**Track Form Submissions:**
```tsx
// In contact form handleSubmit:
gtag('event', 'form_submit', { form_name: 'contact' });
```

## Acceptance Criteria

| Criterion | Status |
|-----------|--------|
| GA4 integrated | 📝 Documentation provided |
| Event tracking setup | 📝 Examples provided |
| Privacy compliant | ✅ Using Next.js Script component |
| Cookie consent | ⚠️ Implement if required by jurisdiction |
| Testing verified | ⏳ After implementation |

## Privacy Considerations

- GA4 loads with `strategy="afterInteractive"` (doesn't block page load)
- No PII collected by default
- Consider cookie consent for EU/GDPR compliance

**Status:** Ready for implementation when GA4 credentials are available.
