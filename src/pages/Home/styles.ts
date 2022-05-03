import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 4%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-75px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Text = styled.h1`
  flex: 1;
  font-size: 18px;
  font-weight: normal;
  text-align: justify;
  color: #ede5ff;
  width: 50%;
  padding: 5vh 8vw;

  animation: ${appearFromLeft} 1s;

  @media (min-width: 885px) {
    width: 70%;
    font-size: 24px;
  }

  @media (min-height: 610px) {
    font-size: 16px;
  }
`;

export const TextHighlight = styled.i`
  font-size: 18px;
  font-weight: bold;
  color: #6a2cf2;

  animation: ${appearFromLeft} 1s;
  @media (max-width: 885px) {
    font-size: 24px;
  }

  @media (min-height: 610px) {
    font-size: 16px;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(75px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Image = styled.img`
  animation: ${appearFromRight} 1s;
  width: 450px;
  right: 0;
  margin-right: 46px;

  @media (max-width: 885px) {
    display: none;
  }
`;
