import React from 'react';
import { BaseComponentProps } from '@/types';

interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  style?: React.CSSProperties;
}

interface CardSubComponentProps extends BaseComponentProps {
  style?: React.CSSProperties;
}

// Card sub-components for better composition
const CardHeader: React.FC<CardSubComponentProps> = ({ children, className = '', style }) => (
  <div className={`mb-4 ${className}`} style={style}>
    {children}
  </div>
);

const CardBody: React.FC<CardSubComponentProps> = ({ children, className = '', style }) => (
  <div className={`${className}`} style={style}>
    {children}
  </div>
);

const CardFooter: React.FC<CardSubComponentProps> = ({ children, className = '', style }) => (
  <div className={`mt-4 ${className}`} style={style}>
    {children}
  </div>
);

const CardTitle: React.FC<CardSubComponentProps> = ({ children, className = '', style }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`} style={style}>
    {children}
  </h3>
);

const CardDescription: React.FC<CardSubComponentProps> = ({ children, className = '', style }) => (
  <p className={`text-gray-600 ${className}`} style={style}>
    {children}
  </p>
);

// Define the compound component type
interface CardComponent extends React.FC<CardProps> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
}

const Card: CardComponent = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
  style,
}) => {
  const baseClasses = 'rounded-lg transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-gray-200',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

// Attach sub-components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;