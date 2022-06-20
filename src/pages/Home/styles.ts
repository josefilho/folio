import styled, { keyframes } from 'styled-components';

/*
  !------------------------------------------------------------------------
  ! @keyframes
  !------------------------------------------------------------------------
*/

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

/*
 *------------------------------------------------------------------------
 * Styles
 *------------------------------------------------------------------------
 */

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 100px);

  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  font-size: 1rem;
  text-align: justify;
  width: 45vw;

  // * Responsiveness
  @media (min-height: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (max-width: 600px) {
    height: calc(100vh - 100px);
  }

  @media (max-height: 560px) {
    font-size: 1.1rem;
  }

  @media (max-height: 480px) {
    font-size: 0.8rem;
  }
`;

export const Text = styled.p`
  color: #ede5ff;

  font-size: 1em;

  animation: ${appearFromLeft} 1s;

  // * Responsiveness

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 600px) {
    font-size: 1.3em;
    margin-top: 2vh;
  }

  @media (max-width: 560px) {
    font-size: 1em;
  }
`;

export const TextHighlight = styled.i`
  font-weight: bold;
  color: #6a2cf2;

  font-size: 1.05em;

  animation: ${appearFromLeft} 1s;

  // * Responsiveness

  @media (max-width: 768px) {
    font-size: 1.3em;
  }

  @media (max-width: 600px) {
    font-size: 1em;
  }

  @media (max-width: 560px) {
    font-size: 1em;
  }
`;

export const Image = styled.img`
  width: 28vw;

  animation: ${appearFromRight} 1s;

  margin-left: 60px;

  // * Responsiveness

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-height: 560px) {
    width: 30vw;
  }

  @media (max-height: 480px) {
    display: none;
  }
`;
