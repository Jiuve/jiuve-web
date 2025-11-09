import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  success,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const getTextareaStyles = () => {
    const baseStyles = 'w-full px-4 py-3 rounded-md text-base bg-white transition-all duration-200 resize-vertical';
    const borderStyles = 'border focus:outline-none';

    if (error) {
      return `${baseStyles} ${borderStyles} border-[var(--color-error)] focus:ring-2 focus:ring-[var(--color-error)] focus:ring-opacity-20`;
    }

    if (success) {
      return `${baseStyles} ${borderStyles} border-[var(--color-success)] focus:ring-2 focus:ring-[var(--color-success)] focus:ring-opacity-20`;
    }

    return `${baseStyles} ${borderStyles} border-[var(--color-border-light)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]`;
  };

  const textareaStyle = {
    width: '100%',
    color: 'var(--color-primary)',
    transition: 'var(--transition-fast)',
    minHeight: '120px'
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block mb-2 font-medium text-sm"
          style={{ color: 'var(--color-primary)' }}
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={getTextareaStyles()}
        style={textareaStyle}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}
    </div>
  );
};
