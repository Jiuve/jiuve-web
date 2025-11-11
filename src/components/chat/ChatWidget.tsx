'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, status, sendMessage, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  const isLoading = status === 'streaming';
  const hasError = status === 'error' || error;

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: 'var(--color-accent)',
          boxShadow: 'var(--shadow-elevated)',
          transition: 'var(--transition-fast)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          // Close icon (X)
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Chat icon
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-lg shadow-2xl"
          style={{
            width: '384px',
            height: '600px',
            maxHeight: 'calc(100vh - 120px)',
            backgroundColor: 'var(--color-background)',
            border: `1px solid var(--color-border)`,
            boxShadow: 'var(--shadow-elevated)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
            }}
          >
            <div>
              <h3
                className="font-semibold"
                style={{ fontSize: 'var(--font-size-body)' }}
              >
                Jiuve AI Assistant
              </h3>
              <p
                className="text-sm opacity-90"
                style={{ fontSize: 'var(--font-size-small)' }}
              >
                How can we help you today?
              </p>
            </div>
          </div>

          {/* Messages Container */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4"
            style={{
              backgroundColor: 'var(--color-background-subtle)',
            }}
          >
            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p
                    className="mb-2 font-medium"
                    style={{
                      color: 'var(--color-secondary)',
                      fontSize: 'var(--font-size-body)',
                    }}
                  >
                    Welcome to Jiuve!
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: 'var(--color-secondary)',
                      fontSize: 'var(--font-size-small)',
                    }}
                  >
                    Ask me about our AI solutions for logistics, automation, or
                    analytics.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => {
                  // Extract text from message parts
                  const textContent = message.parts
                    .filter((part) => part.type === 'text')
                    .map((part: any) => part.text)
                    .join('');

                  return (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className="max-w-[80%] rounded-lg px-4 py-2"
                        style={{
                          backgroundColor:
                            message.role === 'user'
                              ? 'var(--color-accent)'
                              : 'var(--color-background)',
                          color:
                            message.role === 'user'
                              ? 'white'
                              : 'var(--color-text)',
                          border:
                            message.role === 'assistant'
                              ? '1px solid var(--color-border)'
                              : 'none',
                          fontSize: 'var(--font-size-small)',
                          lineHeight: 'var(--line-height-relaxed)',
                        }}
                      >
                        {textContent}
                      </div>
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <div
                      className="rounded-lg px-4 py-2"
                      style={{
                        backgroundColor: 'var(--color-background)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <div className="flex space-x-2">
                        <div
                          className="h-2 w-2 animate-bounce rounded-full"
                          style={{
                            backgroundColor: 'var(--color-secondary)',
                            animationDelay: '0ms',
                          }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full"
                          style={{
                            backgroundColor: 'var(--color-secondary)',
                            animationDelay: '150ms',
                          }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full"
                          style={{
                            backgroundColor: 'var(--color-secondary)',
                            animationDelay: '300ms',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {hasError && (
                  <div className="flex justify-start">
                    <div
                      className="rounded-lg px-4 py-2"
                      style={{
                        backgroundColor: '#FEE',
                        border: '1px solid var(--color-error)',
                        fontSize: 'var(--font-size-small)',
                        lineHeight: 'var(--line-height-relaxed)',
                      }}
                    >
                      <div className="flex items-start space-x-2">
                        <span style={{ color: 'var(--color-error)' }}>⚠️</span>
                        <div>
                          <div
                            className="font-semibold"
                            style={{ color: 'var(--color-error)' }}
                          >
                            Error
                          </div>
                          <div style={{ color: '#C00' }}>
                            {error?.message || 'Failed to get response. Please try again.'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Form */}
          <div
            className="border-t px-4 py-3"
            style={{
              borderColor: 'var(--color-border)',
            }}
          >
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2"
                style={{
                  borderColor: 'var(--color-border)',
                  fontSize: 'var(--font-size-small)',
                  transition: 'var(--transition-fast)',
                }}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="rounded-md px-4 py-2 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  fontSize: 'var(--font-size-small)',
                  transition: 'var(--transition-fast)',
                }}
                disabled={isLoading || !input.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
