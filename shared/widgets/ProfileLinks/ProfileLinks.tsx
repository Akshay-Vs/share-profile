import React from 'react';
import './ProfileLinks.scss';
import LinkButton from './LinkButton';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileLinks = () => {
  return (
    <div className="profile-links p-10 gap-10">
      <LinkButton href="#">
        <LinkButton.Icon icon={faLinkedin} />
      </LinkButton>

      <LinkButton href="#">
        <LinkButton.Icon icon={faLinkedin} />
      </LinkButton>

      <LinkButton href="#">
        <LinkButton.Icon icon={faLinkedin} />
      </LinkButton>
    </div>
  );
};

export default ProfileLinks;
