'use client';
import React from 'react';
import Image from 'next/image';
import { Star, Waves } from '@/shared/components/svgs';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

const ProfileImage = () => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.06}
      useWindowMouseEvents
      className="relative h-[160%] pt-5 pb-5 w-full flex flex-col justify-center items-center"
    >
      <MouseParallaxChild factorX={0.5} factorY={0.6}>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.1}
          className="absolute sm:-left-4 top-12 z-20"
        >
          <Star />
        </MouseParallaxChild>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/qviqaccess.appspot.com/o/images%2Fnordwaveshd_orig.jpg?alt=media&token=db2df8dd-94a1-431d-b757-af4810cea6d8"
          alt="Profile"
          height={392}
          width={300}
          className="w-[300px] h-[392px] max-w-full max-h-full rounded-t-full rounded-b-full absolute z-10"
        />
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          className="relative w-[300px] h-[392px]"
        >
          <div className="w-[300px] h-[392px] max-w-full max-h-full rounded-t-full rounded-b-full -translate-x-1 translate-y-1 absolute bg-[#c6de42]" />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.7}
          factorY={0.8}
          className="absolute left-[210px] bottom-0 z-20"
        >
          <Waves />
        </MouseParallaxChild>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default ProfileImage;
