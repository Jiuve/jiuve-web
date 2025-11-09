import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const getInputStyles = () => {
    const baseStyles = 'w-full px-4 py-3 rounded-md text-base bg-white transition-all duration-200';
    const borderStyles = 'border focus:outline-none';

    if (error) {
      return `${baseStyles} ${borderStyles} border-[var(--color-error)] focus:ring-2 focus:ring-[var(--color-error)] focus:ring-opacity-20`;
    }

    if (success) {
      return `${baseStyles} ${borderStyles} border-[var(--color-success)] focus:ring-2 focus:ring-[var(--color-success)] focus:ring-opacity-20`;
    }

    return `${baseStyles} ${borderStyles} border-[var(--color-border-light)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]`;
  };

  const inputStyle = {
    width: '100%',
    color: 'var(--color-primary)',
    transition: 'var(--transition-fast)'
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 font-medium text-sm"
          style={{ color: 'var(--color-primary)' }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={getInputStyles()}
        style={inputStyle}
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
