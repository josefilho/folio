import React from 'react';

import {
  Container,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href='https://github.com/josefilho' about='_blank'>
        <GithubIcon />
      </a>
      <a href='https://www.linkedin.com/in/filhojosecs/'>
        <LinkedinIcon />
      </a>
      <a href='mailto:iamjose.filho@gmail.com'>
        <MailIcon />
      </a>
      <a href='https://www.facebook.com/nullbyte.dev/'>
        <FacebookIcon />
      </a>
      <a href='https://twitter.com/lxblvk'>
        <TwitterIcon />
      </a>
      <a href='https://www.instagram.com/lxblvk/'>
        <InstagramIcon />
      </a>
    </Container>
  );
};

export default Footer;
