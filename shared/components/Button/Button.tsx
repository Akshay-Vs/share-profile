import React from 'react';
import './Button.scss';

type TButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ children, onClick, className }: TButtonProps) => {
  return (
    <button onClick={onClick} className={`button--primary ${className}`}>
      {children}
    </button>
  );
};

export default Button;
