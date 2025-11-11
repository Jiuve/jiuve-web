# AI Chat Agent Setup Guide

This document explains how to set up and use the AI chat agent integrated into the Jiuve website.

## Overview

The Jiuve website now includes an AI-powered chat widget that helps visitors understand our services and answers questions about AI solutions. The chat agent is powered by Claude 3.5 Sonnet via the Anthropic API.

## Features

- **Floating chat widget** - Accessible from any page via a button in the bottom-right corner
- **Real-time streaming responses** - Claude's responses stream in real-time for a better user experience
- **Conversation memory** - Maintains context throughout the conversation
- **Responsive design** - Matches Jiuve's design system and works on all devices
- **Smart assistance** - Trained to understand Jiuve's services and help qualify leads

## Tech Stack

- **AI Provider**: Anthropic Claude API (Claude 3.5 Sonnet)
- **Framework**: Vercel AI SDK v5
- **UI Library**: React 19 with custom components
- **Styling**: Tailwind CSS v4 with Jiuve design tokens

## Installation

The following packages have been installed:

```bash
npm install ai @ai-sdk/anthropic @ai-sdk/react
```

### Package Versions

- `ai`: ^5.0.92 - Core AI SDK
- `@ai-sdk/anthropic`: ^2.0.44 - Anthropic provider
- `@ai-sdk/react`: ^2.0.92 - React hooks for AI SDK

## Configuration

### 1. Environment Variables

Create a `.env.local` file in the project root (or update your existing one):

```bash
# Anthropic Claude API Configuration
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

**Getting your API key:**
1. Go to https://console.anthropic.com/settings/keys
2. Create a new API key or use an existing one
3. Copy the key and add it to `.env.local`

**Important:**
- This is a server-side secret and should NOT have the `NEXT_PUBLIC_` prefix
- Never commit `.env.local` to version control (it's already in `.gitignore`)
- For production deployment on Vercel, add this environment variable in your Vercel project settings

### 2. File Structure

The AI chat implementation consists of:

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for chat
│   └── layout.tsx                 # Updated to include ChatWidget
└── components/
    └── chat/
        ├── ChatWidget.tsx         # Main chat UI component
        └── index.ts               # Export file
```

## How It Works

### API Route (`src/app/api/chat/route.ts`)

The chat API endpoint:
- Receives messages from the frontend
- Uses the Anthropic Claude API via Vercel AI SDK
- Streams responses back to the client
- Includes a customized system prompt for Jiuve's business context

### Chat Widget (`src/components/chat/ChatWidget.tsx`)

The UI component:
- Uses `useChat` hook from `@ai-sdk/react`
- Manages conversation state automatically
- Renders messages with Jiuve's design tokens
- Shows loading indicators during responses
- Auto-scrolls to new messages

### System Prompt

The AI agent is configured with a system prompt that includes:
- Information about Jiuve's three core services
- Guidance on how to help visitors
- Instructions for qualifying leads
- Direction to contact email for pricing/timeline questions

## Customization

### Modifying the AI's Behavior

Edit the system prompt in `src/app/api/chat/route.ts`:

```typescript
const systemPrompt = `You are a helpful AI assistant for Jiuve...`
```

### Changing the Model

To use a different Claude model, update the model parameter in `src/app/api/chat/route.ts`:

```typescript
model: anthropic('claude-3-5-sonnet-20241022'), // or claude-3-opus-20240229, etc.
```

### Adjusting Temperature

Control response creativity in `src/app/api/chat/route.ts`:

```typescript
temperature: 0.7, // Range: 0.0 (deterministic) to 1.0 (creative)
```

### Styling the Chat Widget

The chat widget uses Jiuve's design tokens from `src/app/globals.css`:
- Colors: `--color-accent`, `--color-primary`, etc.
- Spacing: `--spacing-*`
- Typography: `--font-size-*`
- Borders: `--radius-*`

## Usage

### For Developers

1. Ensure `.env.local` has your `ANTHROPIC_API_KEY`
2. Run the development server: `npm run dev`
3. Open http://localhost:3000
4. Click the chat button in the bottom-right corner

### For End Users

1. Visit any page on the Jiuve website
2. Click the chat bubble icon in the bottom-right corner
3. Type a message and press Send or hit Enter
4. The AI will respond with information about Jiuve's services

## Testing

To test the chat functionality:

1. **Local Development:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 and interact with the chat widget

2. **Production Build:**
   ```bash
   npm run build
   npm start
   ```

3. **Example Questions to Test:**
   - "What services does Jiuve offer?"
   - "How can AI help with logistics management?"
   - "Tell me about AI agent integration"
   - "I need help with analytics and data"

## Troubleshooting

### Chat widget not appearing
- Check that `ChatWidget` is imported in `src/app/layout.tsx`
- Verify the build completed successfully
- Check browser console for errors

### API errors
- Ensure `ANTHROPIC_API_KEY` is set in `.env.local`
- Verify your API key is valid and has credits
- Check the API route at `/api/chat` is accessible

### TypeScript errors
- Make sure all packages are installed: `npm install`
- Verify you're using the correct versions (see Package Versions above)

### Messages not displaying
- Check browser console for errors
- Verify the API route is returning data correctly
- Ensure message parts are being processed (AI SDK v5 uses `parts` array)

## Cost Considerations

- Anthropic charges per token (input + output)
- Claude 3.5 Sonnet: ~$3 per million input tokens, ~$15 per million output tokens (as of Nov 2024)
- Average conversation (10 exchanges): ~$0.01-0.05
- Monitor usage in Anthropic Console: https://console.anthropic.com/

## Security Best Practices

1. **Never commit API keys** - Use `.env.local` for local development
2. **Use environment variables** - Store secrets in Vercel project settings for production
3. **Rate limiting** - Consider adding rate limiting to prevent abuse
4. **Input validation** - The API route should validate and sanitize inputs
5. **Error handling** - Don't expose sensitive error details to clients

## Future Enhancements

Potential improvements to consider:

1. **Conversation persistence** - Save chat history to database
2. **Analytics** - Track common questions and user engagement
3. **Feedback system** - Allow users to rate responses
4. **Multi-language support** - Detect language and respond accordingly
5. **Lead capture** - Integrate with CRM when users show interest
6. **File uploads** - Allow users to share documents for analysis
7. **Suggested prompts** - Show common questions as quick actions

## Resources

- [AI SDK Documentation](https://ai-sdk.dev/docs)
- [Anthropic API Docs](https://docs.anthropic.com/)
- [Vercel AI SDK GitHub](https://github.com/vercel/ai)
- [Claude Model Capabilities](https://docs.anthropic.com/en/docs/models-overview)

## Support

For questions or issues with the AI chat integration:
1. Check this documentation
2. Review the [AI SDK Documentation](https://ai-sdk.dev/docs)
3. Contact the development team

---

**Last Updated:** November 11, 2025
**AI SDK Version:** 5.0.92
**Anthropic SDK Version:** 2.0.44
