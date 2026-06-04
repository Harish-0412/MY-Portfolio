import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'default';
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ variant = 'outline', children, className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg';
  const variantClass =
    variant === 'outline'
      ? 'border border-white/10 bg-transparent hover:bg-white/5 text-slate-100'
      : 'bg-white text-black';

  return (
    <button {...props} className={`${base} ${variantClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
