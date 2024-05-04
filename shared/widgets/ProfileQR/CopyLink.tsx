'use client';
import { Typography } from '@/shared/components';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CopyLink = () => {
  const url = window.location.href;
  return (
    <div className="flex justify-center items-center sm:w-full w-[90%] h-full mt-8">
      <Typography className="bg-[#ffffff43] p-3 px-8 rounded-2xl flex justify-center items-center gap-8 overflow-hidden">
        <Typography.Paragraph>{url}</Typography.Paragraph>
        <FontAwesomeIcon
          icon={faClipboard}
          className="text-white bg-[#fff5] p-3 rounded-2xl cursor-pointer active:scale-95"
          size="xl"
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </Typography>
    </div>
  );
};

export default CopyLink;
