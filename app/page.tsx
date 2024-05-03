import Button from '@/shared/components/Button/Button';
import {
  Name,
  ProfileDetails,
  ProfileImage,
  ProfileLinks,
  ProfileQR,
} from '@/shared/widgets';

export default function Home() {
  return (
    <main className="h-full w-screen flex flex-col justify-center items-center sm:px-8 gap-8">
      <Name />
      <ProfileImage />
      <ProfileDetails />
      <ProfileLinks />
      <ProfileQR />
    </main>
  );
}
