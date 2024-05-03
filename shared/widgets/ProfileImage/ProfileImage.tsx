import React from 'react';
import Image from 'next/image';
import { Star, Waves } from '@/shared/components/svgs';

const ProfileImage = () => {
  return (
    <div className="relative">
      <span className="absolute -left-4 top-12">
        <Star />
      </span>

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/qviqaccess.appspot.com/o/images%2Fnordwaveshd_orig.jpg?alt=media&token=db2df8dd-94a1-431d-b757-af4810cea6d8"
        alt="Profile"
        height={392}
        width={300}
        className="w-[300px] h-[392px] max-w-full max-h-full rounded-t-full rounded-b-full"
      />
      <div className="absolute left-[210px] bottom-0">
        <Waves />
      </div>
    </div>
  );
};

export default ProfileImage;
