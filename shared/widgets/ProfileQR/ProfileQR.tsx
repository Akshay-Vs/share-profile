import React from 'react';
import { Typography } from '@/shared/components';
import './ProfileQR.scss';
import ProfileShare from './ProfileShare';
import Code from './Code';
import CopyLink from './CopyLink';

const ProfileQR = () => {
  return (
    <div className="profile-qr">
      <div className="flex justify-start sm:items-start items-center h-[316px]  flex-col">
        <Typography>
          <Typography.Text variant="h2">
            <span className="text-white">Share your profile</span>
          </Typography.Text>
        </Typography>

        <ProfileShare />
        <CopyLink />
      </div>
      <div className="profile-qr__code">
        <Code />
      </div>
    </div>
  );
};

export default ProfileQR;
