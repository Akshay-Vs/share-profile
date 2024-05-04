'use client';
import { Typography } from '@/shared/components';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CopyLink = () => {
  return (
    <div className="flex justify-center items-center sm:w-full w-[70%] h-full mt-8">
      <Typography className="bg-[#ffffff43] p-3 px-8 rounded-2xl flex justify-center items-center gap-8">
        <Typography.Paragraph>{location.href}</Typography.Paragraph>
        <FontAwesomeIcon
          icon={faClipboard}
          className="text-white bg-[#fff5] p-3 rounded-2xl cursor-pointer active:scale-95"
          size="xl"
          onClick={() => navigator.clipboard.writeText(location.href)}
        />
      </Typography>
    </div>
  );
};

export default CopyLink;
