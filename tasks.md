# Jiuve Website - Development Tasks

**Project:** Jiuve Corporate Website
**Last Updated:** November 9, 2025
**Based on:** ProductRequirements.md v1.0

---

## How to Use This Document

Each task below is designed to be assigned to a subagent. Tasks are organized by phase and include:
- **Task ID**: Unique identifier for tracking
- **Description**: What needs to be done
- **Dependencies**: Which tasks must be completed first
- **Acceptance Criteria**: How to know the task is complete
- **Reference**: Relevant sections in ProductRequirements.md

---

## Phase 1: Setup and Foundation

### Task 1.1: Initialize Next.js Project with Tailwind CSS
**Dependencies:** None
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Set up a new Next.js project with TypeScript and integrate Tailwind CSS for styling.

**Acceptance Criteria:**
- [x] Next.js project initialized with TypeScript
- [x] Tailwind CSS configured and working
- [x] Project structure follows Next.js best practices
- [x] Development server runs successfully
- [x] Hot reload working for both code and styles

**Technical Requirements:**
- Use latest stable Next.js version (App Router recommended)
- Configure Tailwind with custom theme (see Task 1.3)
- Set up proper TypeScript configuration
- Include necessary dependencies in package.json

**Reference:** ProductRequirements.md §6.1, §6.2

---

### Task 1.2: Configure Vercel Deployment
**Dependencies:** Task 1.1
**Priority:** High
**Estimated Effort:** 30 minutes

**Description:**
Set up Vercel deployment configuration and connect the repository.

**Acceptance Criteria:**
- [ ] Vercel project created and connected to repository
- [ ] Automatic deployments configured for main branch
- [ ] Preview deployments configured for pull requests
- [ ] Environment variables configured (if needed)
- [ ] Custom domain setup (if available)

**Reference:** ProductRequirements.md §6.1

---

### Task 1.3: Implement Design System Foundation
**Dependencies:** Task 1.1
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Create the foundational design system including colors, typography, and spacing utilities in Tailwind configuration.

**Acceptance Criteria:**
- [ ] Custom color palette configured in tailwind.config.js:
  - Primary: #0F172A (Slate Dark)
  - Secondary: #1E293B (Slate)
  - Accent: #06B6D4 (Cyan)
  - Highlight: #8B5CF6 (Purple)
  - Background: #FFFFFF (White)
- [ ] Typography scale configured (H1-H4, body, small)
- [ ] Spacing system based on 8px grid
- [ ] Font family configured (Inter, Geist, or DM Sans)
- [ ] Responsive breakpoints defined (mobile, tablet, desktop)

**Reference:** ProductRequirements.md §7.2, §7.3, §7.4

---

### Task 1.4: Create Component Structure and Base Components
**Dependencies:** Task 1.3
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Set up the component folder structure and create reusable base components (Button, Card, Input, etc.).

**Acceptance Criteria:**
- [ ] Component folder structure created
- [ ] Button component with Primary and Secondary variants (§7.5.1)
- [ ] Card component with hover effects (§7.5.2)
- [ ] Input/Textarea components with validation states (§7.5.3)
- [ ] All components are TypeScript-typed
- [ ] Components follow design specifications
- [ ] Storybook or component preview set up (optional but recommended)

**Reference:** ProductRequirements.md §7.5

---

### Task 1.5: Create Layout Components (Header, Footer, Navigation)
**Dependencies:** Task 1.4
**Priority:** High
**Estimated Effort:** 3-4 hours

**Description:**
Build the shared layout components that will be used across all pages.

**Acceptance Criteria:**
- [ ] Header/Navigation component created:
  - Sticky navigation
  - Links: Home, About Us, Contact
  - Responsive (hamburger menu on mobile)
  - Follows design spec (§7.5.4)
- [ ] Footer component created:
  - Navigation links
  - Contact email: chunkiet@jiuve.com
  - Copyright notice: © 2025 Jiuve. All rights reserved.
- [ ] Mobile navigation fully functional
- [ ] Smooth transitions and animations
- [ ] Minimum 44px touch targets on mobile

**Reference:** ProductRequirements.md §5.1.6, §7.5.4

---

### Task 1.6: Set Up SEO Configuration
**Dependencies:** Task 1.1
**Priority:** Medium
**Estimated Effort:** 1-2 hours

**Description:**
Configure SEO metadata, sitemap, and robots.txt.

**Acceptance Criteria:**
- [ ] Meta tags configured for all pages (see §6.5)
- [ ] Open Graph tags added
- [ ] Semantic HTML5 structure
- [ ] XML sitemap generated
- [ ] robots.txt created
- [ ] Proper heading hierarchy enforced

**Reference:** ProductRequirements.md §6.5

---

## Phase 2: Main Page (Home) Development

### Task 2.1: Build Hero Section
**Dependencies:** Task 1.5
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Create the hero section for the home page with headline, subheadline, and CTA button.

**Acceptance Criteria:**
- [ ] Headline: "Custom AI Solutions That Work"
- [ ] Subheadline: "We combine strategic thinking with hands-on development to build AI solutions tailored to your business—from concept to deployment."
- [ ] "Get Started" CTA button linking to /contact
- [ ] Jiuve logo displayed (use placeholder if not available)
- [ ] Full-width section with centered content
- [ ] Responsive on all breakpoints
- [ ] Clean, minimal design with focus on messaging

**Reference:** ProductRequirements.md §5.1.1

---

### Task 2.2: Build "What Makes Us Different" Section
**Dependencies:** Task 1.5
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Create the differentiation section that explains Jiuve's unique value proposition.

**Acceptance Criteria:**
- [ ] Section title: "Solutions, Not Just Advice"
- [ ] Body content as specified in §5.1.2
- [ ] Clear, scannable text layout
- [ ] Emphasis on "build" not just "consult"
- [ ] Highlight "hardware integration" as differentiator
- [ ] Responsive design
- [ ] Proper spacing and typography

**Reference:** ProductRequirements.md §5.1.2

---

### Task 2.3: Build Services Section (3 Service Cards)
**Dependencies:** Task 1.4
**Priority:** High
**Estimated Effort:** 3-4 hours

**Description:**
Create the three-column service cards section showcasing core offerings.

**Acceptance Criteria:**
- [ ] Three service cards created:
  1. Logistics Management AI
  2. AI Agent Integration
  3. Analytics Solutions with AI
- [ ] Each card includes:
  - Icon/visual (use icon library or create)
  - Headline
  - Description
  - Key features (bullet points)
- [ ] Three-column layout on desktop
- [ ] Stacks to single column on mobile
- [ ] Equal height cards
- [ ] Subtle hover effects
- [ ] Clean, modern card design

**Reference:** ProductRequirements.md §5.1.3, Table on services

---

### Task 2.4: Build Company Values/Approach Section
**Dependencies:** Task 1.4
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Create the values section displaying the 5 core company values.

**Acceptance Criteria:**
- [ ] 5-column grid layout (responsive: 2-3 columns tablet, 1 column mobile)
- [ ] All 5 values included:
  - Innovative: "Cutting-edge solutions tailored to your needs"
  - Quality-Focused: "Excellence in every line of code"
  - Minimalistic: "Clean, efficient designs that work"
  - Efficient: "Fast delivery without compromising standards"
  - Responsible: "Ethical AI that serves your business goals"
- [ ] Icons for each value (simple, modern)
- [ ] Consistent visual treatment
- [ ] Responsive on all breakpoints

**Reference:** ProductRequirements.md §5.1.4

---

### Task 2.5: Build Final CTA Section
**Dependencies:** Task 1.4
**Priority:** Medium
**Estimated Effort:** 1-2 hours

**Description:**
Create the final call-to-action section before the footer.

**Acceptance Criteria:**
- [ ] Title: "Ready to Transform Your Business?"
- [ ] Subtext: "Let's discuss how Jiuve can build the AI solution you need"
- [ ] "Get Started" CTA button linking to /contact
- [ ] Prominent section with contrasting background
- [ ] Large, clear CTA button
- [ ] Compelling but not aggressive design

**Reference:** ProductRequirements.md §5.1.5

---

### Task 2.6: Home Page Integration and Polish
**Dependencies:** Tasks 2.1, 2.2, 2.3, 2.4, 2.5
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Integrate all home page sections and ensure cohesive flow and spacing.

**Acceptance Criteria:**
- [ ] All sections integrated into home page
- [ ] Consistent spacing between sections (64px mobile, 96px desktop)
- [ ] Smooth scroll behavior
- [ ] Proper section transitions
- [ ] Accessibility features verified
- [ ] Performance optimized
- [ ] Cross-browser tested

**Reference:** ProductRequirements.md §7.6

---

## Phase 3: Contact Page Development

### Task 3.1: Build Contact Form UI
**Dependencies:** Task 1.4
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Create the contact form with all required fields and styling.

**Acceptance Criteria:**
- [ ] Form fields created:
  - Email (email input, required)
  - Phone Number (tel input, required)
  - What they are looking for (textarea, required)
  - Optional dropdown: Logistics AI, Agent Integration, Analytics, Other
- [ ] Form follows design specifications (§7.5.3)
- [ ] Responsive layout
- [ ] Proper labels and placeholders
- [ ] Accessible form controls

**Reference:** ProductRequirements.md §5.2.1

---

### Task 3.2: Implement Form Validation
**Dependencies:** Task 3.1
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Add client-side validation for all form fields.

**Acceptance Criteria:**
- [ ] Email format validation
- [ ] Phone number format validation
- [ ] Required field validation
- [ ] Real-time validation feedback
- [ ] Error messages displayed clearly
- [ ] Fields with errors highlighted
- [ ] Prevent duplicate submissions
- [ ] Disable submit button during submission

**Reference:** ProductRequirements.md §5.2.1, Form Behavior section

---

### Task 3.3: Integrate Email Service (EmailJS or Nodemailer)
**Dependencies:** Task 3.2
**Priority:** High
**Estimated Effort:** 3-4 hours

**Description:**
Set up email delivery system for form submissions to chunkiet@jiuve.com.

**Acceptance Criteria:**
- [ ] Email service configured (EmailJS or Nodemailer)
- [ ] Form submissions sent to chunkiet@jiuve.com
- [ ] Email includes all form fields
- [ ] Email includes timestamp
- [ ] Email follows template specified in §5.2.1
- [ ] Error handling for failed submissions
- [ ] Environment variables properly configured

**Email Template:**
```
Subject: New Contact Form Submission - Jiuve Website

New contact form submission received:

Email: [user email]
Phone: [user phone]
Interested in: [dropdown selection if provided]
Message: [user message]

Submitted: [timestamp]
```

**Reference:** ProductRequirements.md §5.2.1, §6.1

---

### Task 3.4: Implement Form Success and Error States
**Dependencies:** Task 3.3
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Create success and error states for form submission.

**Acceptance Criteria:**
- [ ] Success message displayed after submission
- [ ] Form cleared on success
- [ ] Next steps or expected response time communicated
- [ ] Error messages for failed submissions
- [ ] Retry option on error
- [ ] Loading state during submission
- [ ] Smooth transitions between states

**Reference:** ProductRequirements.md §5.2.1, Form Behavior section

---

### Task 3.5: Contact Page Testing and Validation
**Dependencies:** Task 3.4
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Thoroughly test contact form functionality and email delivery.

**Acceptance Criteria:**
- [ ] Test all validation scenarios
- [ ] Test successful form submission
- [ ] Verify email delivery to chunkiet@jiuve.com
- [ ] Test error handling
- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Accessibility testing completed

**Reference:** ProductRequirements.md §6.4

---

## Phase 4: About Us Page Development

### Task 4.1: Build Founder Information Section
**Dependencies:** Task 1.5
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Create the founder information section with bio and photo.

**Acceptance Criteria:**
- [ ] Section layout created
- [ ] Founder name displayed
- [ ] Background/bio section
- [ ] Photo placement (placeholder if not available)
- [ ] Professional, clean layout
- [ ] Responsive design
- [ ] Proper typography and spacing

**Note:** Use placeholder content if final content not available:
- [Founder Name]
- [Founder bio - 2-3 paragraphs about background, experience, vision]

**Reference:** ProductRequirements.md §5.3.1, §8.3

---

### Task 4.2: Build Achievements Section
**Dependencies:** Task 4.1
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Create section displaying founder's key achievements and credentials.

**Acceptance Criteria:**
- [ ] List of 3-5 key accomplishments
- [ ] Relevant experience highlighted
- [ ] Notable projects or credentials
- [ ] Visually appealing layout
- [ ] Icons or visual elements to enhance readability
- [ ] Responsive design

**Note:** Use placeholder if final content not available:
- [List of 3-5 key achievements]

**Reference:** ProductRequirements.md §5.3.1

---

### Task 4.3: Build Company Values Section (About Page)
**Dependencies:** Task 2.4
**Priority:** Medium
**Estimated Effort:** 1-2 hours

**Description:**
Reuse or adapt the company values component from the home page for the About page.

**Acceptance Criteria:**
- [ ] Same 5 values as main page:
  - Innovative
  - Quality-Focused
  - Minimalistic
  - Efficient
  - Responsible
- [ ] Expanded descriptions if needed
- [ ] Consistent with home page design
- [ ] Adapted layout for About page context

**Reference:** ProductRequirements.md §5.3.1

---

### Task 4.4: Build Company Mission/Goal Section
**Dependencies:** Task 1.5
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Create section communicating company mission and vision.

**Acceptance Criteria:**
- [ ] Mission statement: "Help power the new AI era through custom and innovative solutions"
- [ ] Vision for the future
- [ ] Why Jiuve exists
- [ ] Authentic, personal tone while maintaining professionalism
- [ ] Inspiring and engaging content
- [ ] Proper visual hierarchy

**Reference:** ProductRequirements.md §5.3.1

---

### Task 4.5: About Page Integration and Polish
**Dependencies:** Tasks 4.1, 4.2, 4.3, 4.4
**Priority:** High
**Estimated Effort:** 2 hours

**Description:**
Integrate all About page sections and ensure cohesive flow.

**Acceptance Criteria:**
- [ ] All sections integrated
- [ ] Single column, scannable layout
- [ ] Consistent spacing and typography
- [ ] Professional photography integrated (if available)
- [ ] Mix of text and visual elements
- [ ] Responsive on all breakpoints
- [ ] Smooth reading experience

**Reference:** ProductRequirements.md §5.3.1

---

## Phase 5: Polish and Optimization

### Task 5.1: Responsive Design Testing and Fixes
**Dependencies:** All Phase 2, 3, 4 tasks
**Priority:** High
**Estimated Effort:** 3-4 hours

**Description:**
Test all pages across different devices and screen sizes, fix any responsive issues.

**Acceptance Criteria:**
- [ ] Mobile (< 640px) tested and working
- [ ] Tablet (640px - 1024px) tested and working
- [ ] Desktop (> 1024px) tested and working
- [ ] Large Desktop (> 1280px) tested and working
- [ ] Touch targets minimum 44px on mobile
- [ ] Images optimized for different screen sizes
- [ ] No horizontal scrolling
- [ ] Content readable at all sizes

**Test Devices:**
- iPhone (various models)
- iPad
- Android phones/tablets
- Various desktop resolutions

**Reference:** ProductRequirements.md §6.2

---

### Task 5.2: Cross-Browser Testing and Compatibility
**Dependencies:** All Phase 2, 3, 4 tasks
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Test website across all required browsers and fix compatibility issues.

**Acceptance Criteria:**
- [ ] Chrome (latest 2 versions) - fully functional
- [ ] Firefox (latest 2 versions) - fully functional
- [ ] Safari (latest 2 versions) - fully functional
- [ ] Edge (latest 2 versions) - fully functional
- [ ] All features working consistently
- [ ] Visual consistency across browsers
- [ ] No console errors

**Reference:** ProductRequirements.md §6.4

---

### Task 5.3: Performance Optimization
**Dependencies:** All Phase 2, 3, 4 tasks
**Priority:** High
**Estimated Effort:** 3-4 hours

**Description:**
Optimize website performance to meet target metrics.

**Acceptance Criteria:**
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Lighthouse Performance Score > 90
- [ ] Images optimized (WebP with fallbacks)
- [ ] Lazy loading implemented for below-fold images
- [ ] Code splitting implemented
- [ ] Unnecessary JavaScript removed

**Tools:**
- Lighthouse
- WebPageTest
- Chrome DevTools

**Reference:** ProductRequirements.md §6.3, §8.2

---

### Task 5.4: Accessibility Audit and Fixes
**Dependencies:** All Phase 2, 3, 4 tasks
**Priority:** High
**Estimated Effort:** 3-4 hours

**Description:**
Conduct comprehensive accessibility audit and implement WCAG 2.1 Level AA compliance.

**Acceptance Criteria:**
- [ ] Color contrast ratios meet 4.5:1 minimum
- [ ] Full keyboard navigation support
- [ ] Screen reader compatibility verified
- [ ] Alt text for all images
- [ ] ARIA labels where appropriate
- [ ] Focus indicators on interactive elements
- [ ] Form labels and error messages accessible
- [ ] Semantic HTML structure
- [ ] No accessibility errors in automated tests

**Tools:**
- axe DevTools
- WAVE
- Lighthouse Accessibility audit
- Screen reader testing (NVDA, VoiceOver)

**Reference:** ProductRequirements.md §6.6

---

### Task 5.5: SEO Implementation and Verification
**Dependencies:** Task 1.6, All Phase 2, 3, 4 tasks
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Verify and enhance SEO implementation across all pages.

**Acceptance Criteria:**
- [ ] All meta descriptions implemented correctly
- [ ] Open Graph tags verified
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Semantic HTML5 throughout
- [ ] XML sitemap generated and accessible
- [ ] robots.txt configured correctly
- [ ] Internal linking optimized
- [ ] Page titles follow specification
- [ ] Structured data considered (optional)

**Reference:** ProductRequirements.md §6.5

---

### Task 5.6: Analytics Integration
**Dependencies:** All Phase 2, 3, 4 tasks
**Priority:** Medium
**Estimated Effort:** 2-3 hours

**Description:**
Integrate Google Analytics 4 and set up event tracking.

**Acceptance Criteria:**
- [ ] Google Analytics 4 (GA4) integrated
- [ ] Event tracking implemented for:
  - Button clicks (CTA buttons)
  - Form submissions
  - Form field interactions
  - Navigation clicks
  - Scroll depth
  - Outbound link clicks
- [ ] Privacy compliant
- [ ] Cookie consent (if required by jurisdiction)
- [ ] Testing verified in GA4 dashboard

**Reference:** ProductRequirements.md §9.3

---

## Phase 6: Testing and Launch

### Task 6.1: User Acceptance Testing (UAT)
**Dependencies:** All Phase 5 tasks
**Priority:** High
**Estimated Effort:** 2-3 hours

**Description:**
Conduct user acceptance testing with stakeholders and collect feedback.

**Acceptance Criteria:**
- [ ] All pages reviewed by stakeholders
- [ ] All functionality tested end-to-end
- [ ] Contact form tested with real submissions
- [ ] Feedback collected and documented
- [ ] Critical issues identified and fixed
- [ ] Sign-off received from stakeholders

**Reference:** ProductRequirements.md §14

---

### Task 6.2: Final Content Review and Copy Updates
**Dependencies:** Task 6.1
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Review all website copy, replace placeholders, and ensure accuracy.

**Acceptance Criteria:**
- [ ] All placeholder content replaced with final copy
- [ ] Founder information and bio finalized
- [ ] Achievements list finalized
- [ ] All email addresses verified
- [ ] Spelling and grammar checked
- [ ] Brand voice consistency verified
- [ ] Legal text reviewed (copyright, etc.)

**Reference:** ProductRequirements.md §8.3

---

### Task 6.3: Performance and Security Final Check
**Dependencies:** Task 6.1
**Priority:** High
**Estimated Effort:** 2 hours

**Description:**
Final performance testing and security review before launch.

**Acceptance Criteria:**
- [ ] Performance metrics meet targets (run Lighthouse)
- [ ] No security vulnerabilities (run security audit)
- [ ] SSL certificate configured
- [ ] Environment variables secured
- [ ] No exposed API keys or secrets
- [ ] Form submission security verified
- [ ] XSS and injection vulnerabilities tested
- [ ] Rate limiting considered for form submissions

**Reference:** ProductRequirements.md §6.3

---

### Task 6.4: Production Deployment
**Dependencies:** Tasks 6.2, 6.3
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Deploy website to production and configure custom domain.

**Acceptance Criteria:**
- [ ] Production build successful
- [ ] Deployed to Vercel production
- [ ] Custom domain configured (if available)
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] All environment variables set
- [ ] Analytics tracking verified in production
- [ ] Email delivery verified in production
- [ ] Smoke tests passed in production

**Reference:** ProductRequirements.md §6.1

---

### Task 6.5: Post-Launch Monitoring and Documentation
**Dependencies:** Task 6.4
**Priority:** High
**Estimated Effort:** 1-2 hours

**Description:**
Monitor website post-launch and create documentation.

**Acceptance Criteria:**
- [ ] Monitor analytics for first 24-48 hours
- [ ] Check for any errors or issues
- [ ] Verify form submissions working
- [ ] Create deployment documentation
- [ ] Create maintenance documentation
- [ ] Document environment setup
- [ ] Create content update guide
- [ ] Hand off to client with documentation

**Reference:** ProductRequirements.md §9.1, §9.2

---

## Task Dependencies Summary

```
Phase 1 (Foundation)
├── 1.1 → 1.2, 1.3, 1.6
├── 1.3 → 1.4
├── 1.4 → 1.5, 2.3, 2.4, 2.5, 3.1
└── 1.5 → 2.1, 2.2, 4.1, 4.4

Phase 2 (Home Page)
├── 2.1, 2.2, 2.3, 2.4, 2.5 → 2.6

Phase 3 (Contact Page)
├── 3.1 → 3.2
├── 3.2 → 3.3
├── 3.3 → 3.4
└── 3.4 → 3.5

Phase 4 (About Page)
├── 4.1 → 4.2
├── 2.4 → 4.3
├── 4.1, 4.2, 4.3, 4.4 → 4.5

Phase 5 (Polish)
├── All Phase 2, 3, 4 → 5.1, 5.2, 5.3, 5.4, 5.5, 5.6

Phase 6 (Launch)
├── All Phase 5 → 6.1
├── 6.1 → 6.2, 6.3
├── 6.2, 6.3 → 6.4
└── 6.4 → 6.5
```

---

## Quick Reference

**Total Tasks:** 31
- Phase 1: 6 tasks (Foundation)
- Phase 2: 6 tasks (Home Page)
- Phase 3: 5 tasks (Contact Page)
- Phase 4: 5 tasks (About Page)
- Phase 5: 6 tasks (Polish & Optimization)
- Phase 6: 5 tasks (Testing & Launch)

**Priority Distribution:**
- High Priority: 27 tasks
- Medium Priority: 4 tasks

**Key Contact:** chunkiet@jiuve.com

**Key Files to Reference:**
- ProductRequirements.md - Complete specification
- Design System - See §7 in PRD
- Content Guidelines - See §8 in PRD

---

## Notes for Subagents

1. **Always reference the ProductRequirements.md** for detailed specifications
2. **Ask for clarification** if requirements are unclear
3. **Use placeholders** for content that's not yet available
4. **Follow the design system** strictly (colors, typography, spacing)
5. **Test your work** before marking as complete
6. **Document any deviations** from the original requirements
7. **Communicate blockers** early if dependencies aren't met

---

**End of Tasks Document**
