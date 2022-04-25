import styled, { keyframes } from 'styled-components';
import * as feather from '@styled-icons/feather';

export const Container = styled.footer`
  display: flex;

  width: 100vw;
  height: 50px;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;

  a + a {
    margin-left: 24px;
  }

  background: linear-gradient(0deg, #050010 80%, #00000000 112%);
`;

const fillAnimated = keyframes`
  from {
    fill: #00000000;
  }
  to {
    fill: #6a2cf2;
  }
`;

export const GithubIcon = styled(feather.Github)`
  width: 36px;
  color: #ede5ff;
  transition: margin 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    animation: ${fillAnimated} alternate 1s infinite;
    margin-bottom: 4px;
  }
`;

export const LinkedinIcon = styled(feather.Linkedin)`
  width: 36px;
  color: #ede5ff;
  transition: margin 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    margin-bottom: 4px;

    path {
      animation: ${fillAnimated} alternate 1s infinite;
    }
    rect {
      animation: ${fillAnimated} alternate 1s infinite;
    }
    circle {
      animation: ${fillAnimated} alternate 1s infinite;
    }

    margin-bottom: 4px;
  }
`;

export const MailIcon = styled(feather.Mail)`
  width: 36px;
  color: #ede5ff;
  transition: margin 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    margin-bottom: 4px;
    path {
      animation: ${fillAnimated} alternate 1s infinite;
    }
  }
`;

export const TwitterIcon = styled(feather.Twitter)`
  width: 36px;
  color: #ede5ff;
  transition: margin 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    margin-bottom: 4px;
    path {
      animation: ${fillAnimated} alternate 1s infinite;
    }
  }
`;

export const InstagramIcon = styled(feather.Instagram)`
  width: 36px;
  color: #ede5ff;
  transition: margin 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    margin-bottom: 4px;
    rect {
      animation: ${fillAnimated} alternate 1s infinite;
    }
  }
`;

export const FacebookIcon = styled(feather.Facebook)`
  width: 36px;
  color: #ede5ff;
  transition: margin 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    margin-bottom: 4px;
    path {
      animation: ${fillAnimated} alternate 1s infinite;
    }
  }
`;
