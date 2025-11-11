import { anthropic } from '@ai-sdk/anthropic';
import { streamText, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // System prompt tailored for Jiuve's business
    const systemPrompt = `You are a helpful AI assistant for Jiuve, a company specializing in custom AI solutions for mid-sized businesses and corporations.

Core Services:
1. Logistics Management AI - Supply chain optimization, routing, and inventory management
2. AI Agent Integration - Workflow automation and intelligent assistants
3. Analytics Solutions with AI - Data transformation and predictive modeling

Your role:
- Help visitors understand Jiuve's services and how AI can benefit their business
- Ask thoughtful questions to understand their specific needs and challenges
- Provide relevant examples of how Jiuve's solutions could address their problems
- Be professional, knowledgeable, and consultative in your approach
- If asked about pricing or specific project timelines, guide them to contact the team at chunkiet@jiuve.com
- Focus on understanding their business context and pain points before suggesting solutions

Key differentiators of Jiuve:
- Full-service approach: from brainstorming to deployment
- Hands-on software development and hardware integration
- Focus on practical, working solutions rather than just consulting
- Expertise in logistics, AI agents, and analytics

Be conversational, helpful, and aim to qualify leads by understanding their needs before directing them to the contact page.`;

    // Convert UIMessage[] to ModelMessage[] format
    const modelMessages = convertToModelMessages(messages);

    // Use the correct Claude 3.5 Sonnet model name
    const result = await streamText({
      model: anthropic('claude-3-5-sonnet-20240620'),
      messages: modelMessages,
      system: systemPrompt,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error('Chat API Error:', error);

    // Handle different types of errors
    let statusCode = 500;
    let errorMessage = 'Failed to process chat request';
    let errorDetails = error instanceof Error ? error.message : 'Unknown error';

    // Check if it's an API call error (from Anthropic)
    if (error.name === 'AI_APICallError') {
      statusCode = error.statusCode || 500;
      errorMessage = 'AI Service Error';
      errorDetails = error.message;

      // Log the full error for debugging
      console.error('Anthropic API Error Details:', {
        statusCode: error.statusCode,
        responseBody: error.responseBody,
        url: error.url,
      });
    }

    return new Response(
      JSON.stringify({
        error: errorMessage,
        details: errorDetails,
        statusCode: statusCode,
      }),
      {
        status: statusCode,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
