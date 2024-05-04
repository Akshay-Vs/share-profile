'use client';
import {
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';

const ProfileShare = () => {
  const shareUrl = window && window.location.href;

  const title = 'Visit my profile';
  return (
    <div className="flex justify-center items-center gap-8 w-full mt-10 flex-wrap">
      <div className="bg-white flex justify-center items-center p-2 rounded-xl h-16 w-16 cursor-pointer">
        <TwitterShareButton url={shareUrl} title={title}>
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </TwitterShareButton>
      </div>

      <div className="bg-white flex justify-center items-center p-2 rounded-xl h-16 w-16 cursor-pointer">
        <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </WhatsappShareButton>
      </div>

      <div className="bg-white flex justify-center items-center p-2 rounded-xl h-16 w-16 cursor-pointer">
        <LinkedinShareButton url={shareUrl}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </LinkedinShareButton>
      </div>

      <div className="bg-white flex justify-center items-center p-2 rounded-xl h-16 w-16 cursor-pointer">
        <EmailShareButton url={shareUrl} subject={title} body="Connect with me">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </EmailShareButton>
      </div>

      <div className="bg-white flex justify-center items-center p-2 rounded-xl h-16 w-16 cursor-pointer">
        <FontAwesomeIcon icon={faDownload} size="2x" />
      </div>
    </div>
  );
};

export default ProfileShare;
