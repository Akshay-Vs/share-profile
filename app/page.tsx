import { Name, ProfileDetails, ProfileImage } from '@/shared/widgets';

export default function Home() {
  return (
    <main className="h-full w-screen flex flex-col justify-center items-center p-8 gap-5">
      <Name />
      <ProfileImage />
      <ProfileDetails />
    </main>
  );
}
