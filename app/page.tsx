'use client';
import {
  Name,
  ProfileDetails,
  ProfileImage,
  ProfileLinks,
  ProfileQR,
} from '@/shared/widgets';

export default function Home() {
  const isBrowser = typeof window !== 'undefined';

  return (
    <main className="h-full w-screen flex flex-col justify-center items-center sm:px-8 gap-8">
      {isBrowser && <Name />}
      {isBrowser && <ProfileImage />}
      {isBrowser && <ProfileDetails />}
      {isBrowser && <ProfileLinks />}
      {isBrowser && <ProfileQR />}
    </main>
  );
}
