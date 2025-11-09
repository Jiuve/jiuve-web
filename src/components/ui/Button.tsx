import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-3 rounded-md font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'text-white hover:scale-105 active:scale-95',
    secondary: 'border-2 hover:scale-105 active:scale-95'
  };

  const primaryStyle = {
    backgroundColor: 'var(--color-accent)',
    transition: 'var(--transition-fast)'
  };

  const secondaryStyle = {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    borderColor: 'var(--color-secondary)',
    transition: 'var(--transition-fast)'
  };

  const secondaryHoverClass = 'hover:bg-[var(--color-background-subtle)] hover:border-[var(--color-accent)]';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${variant === 'secondary' ? secondaryHoverClass : ''} ${className}`}
      style={variant === 'primary' ? primaryStyle : secondaryStyle}
      {...props}
    >
      {children}
    </button>
  );
};
