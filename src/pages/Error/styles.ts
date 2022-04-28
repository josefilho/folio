import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  color: #fff;

  margin-top: 15vh;

  animation: ${appearFromTop} 1s;
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #ede5ff;

  animation: ${appearFromTop} 1s;
`;

export const Image = styled.img`
  width: 25vw;

  animation: ${appearFromBottom} 1s;
`;
