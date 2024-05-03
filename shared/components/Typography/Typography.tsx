import React from 'react';
import { IExtendablesWithChildren } from '@/shared/interfaces';
import './Typography.scss';

//#region Interfaces

interface ITypographyText extends IExtendablesWithChildren<HTMLDivElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
}

//#endregion

const Typography = ({
  children,
  props,
  className,
}: IExtendablesWithChildren<HTMLDivElement>) => {
  return (
    <div className={`typography ${className}`} {...props}>
      {children}
    </div>
  );
};

const Text = ({ variant = 'h1', className, children }: ITypographyText) => {
  return (
    <div
      className={`typography__heading typography__heading--${variant} ${className}`}
    >
      {children}
    </div>
  );
};

const Paragraph = ({
  children,
  props,
  className,
}: IExtendablesWithChildren<HTMLDivElement>) => {
  return (
    <div className={`typography__paragraph ${className}`} {...props}>
      {children}
    </div>
  );
};

Typography.Text = Text;
Typography.Paragraph = Paragraph;

export default Typography;
