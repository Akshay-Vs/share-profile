import Typography from '@/shared/components/Typography/Typography';
import React from 'react';

const ProfileDetails = () => {
  return (
    <div>
      <Typography className="flex flex-col justify-center items-center gap-2">
        <Typography.Text variant="h6">Full stack developer</Typography.Text>
        <Typography.Text variant="h6">IOTA</Typography.Text>
        <Typography.Paragraph className="sm-w-[50%] px-5 text-center mt-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to
        </Typography.Paragraph>
      </Typography>
    </div>
  );
};

export default ProfileDetails;
