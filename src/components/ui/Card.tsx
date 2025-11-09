import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg p-8 border transition-all duration-300';
  const hoverStyles = hover
    ? 'hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-[var(--color-accent)]'
    : '';

  const cardStyle = {
    borderColor: 'var(--color-border)',
    boxShadow: 'var(--shadow-subtle)',
    transition: 'var(--transition-base)'
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  );
};
