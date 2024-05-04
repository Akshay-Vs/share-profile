'use client';
import React from 'react';
import QRCode from 'react-qr-code';

const Code = () => {
  return (
    <QRCode
      value={location.href}
      size={256}
      style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
      viewBox={`0 0 256 256`}
      bgColor="#00000000"
    />
  );
};

export default Code;
