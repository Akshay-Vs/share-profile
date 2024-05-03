import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

type TLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
};

type TIconProps = {
  icon: IconDefinition;
};

const LinkButton = ({ href, target = '_blank', children }: TLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      className="w-16 h-16 sm:w-[120px] sm:h-[120px] flex items-center justify-center bg-[#FFFFFF] hover:cursor-pointer rounded-[16px] outline outline-0 outline-[#071C21] hover:outline-1"
    >
      {children}
    </Link>
  );
};

const Icon = ({ icon }: TIconProps) => {
  return (
    <FontAwesomeIcon
      className="flex justify-center items-center"
      size="2xl"
      icon={icon}
    />
  );
};

LinkButton.Icon = Icon;

export default LinkButton;
