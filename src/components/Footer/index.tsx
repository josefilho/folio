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
      <a href='https://github.com/josefilho' target='_blank' rel='noreferrer'>
        <GithubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/filhojosecs/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedinIcon />
      </a>
      <a href='mailto:iamjose.filho@gmail.com'>
        <MailIcon />
      </a>
      <a
        href='https://www.facebook.com/nullbyte.dev/'
        target='_blank'
        rel='noreferrer'
      >
        <FacebookIcon />
      </a>
      <a href='https://twitter.com/lxblvk' target='_blank' rel='noreferrer'>
        <TwitterIcon />
      </a>
      <a
        href='https://www.instagram.com/lxblvk/'
        target='_blank'
        rel='noreferrer'
      >
        <InstagramIcon />
      </a>
    </Container>
  );
};

export default Footer;
