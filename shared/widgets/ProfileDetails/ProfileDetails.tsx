import { Typography, Button } from '@/shared/components';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProfileDetails = () => {
  return (
    <div>
      <Typography className="flex flex-col justify-center items-center gap-2">
        <Typography.Text variant="h6">Full stack developer</Typography.Text>
        <Typography.Text variant="h6">IOTA</Typography.Text>

        <div className="sm:w-[50%] px-2 sm:px-0">
          <Typography.Paragraph className=" px-5 text-center mt-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, to
          </Typography.Paragraph>

          <Button className="mt-7">
            <FontAwesomeIcon
              icon={faPhone}
              className="flex justify-center items-center mx-3"
            />
            Get In Touch
          </Button>
        </div>
      </Typography>
    </div>
  );
};

export default ProfileDetails;
