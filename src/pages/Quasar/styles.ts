import styled, { keyframes } from 'styled-components';

const smoothAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
  `;
export const BackgroundContainer = styled.img`
  opacity: 0.6;
  z-index: -10;
  position: fixed;

  animation: ${smoothAppear} 1.5s linear;
`;

const smoothAppearContent = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;
export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 50px);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${smoothAppearContent} 1.5s linear;
`;

// Section: Quasar Presentation
export const QuasarPresentation = styled.section``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
`;

export const TitleHighlight = styled.h1`
  font-family: 'MonteCarlo', cursive;
  color: #ede6ff;
  font-weight: normal;
  font-size: 48px;
`;
export const TitleNormal = styled.h1`
  font-family: 'Major Mono Display', monospace;
  font-weight: normal;
  margin-top: -15px;
  color: #ede6ff;
  font-size: 40px;
`;
export const Subtitle = styled.h4`
  margin-top: 24px;
  font-family: 'NovaMono', 'Roboto', monospace;
  font-weight: normal;
  color: #ede6ff;
  font-size: 24px;
  animation-delay: 0.5s;
`;

export const PresentationText = styled.p`
  margin-top: 36px;
  font-family: 'NovaMono', 'Roboto', monospace;
  width: 25vw;
  text-align: center;
  font-size: 16px;
  color: #ede6ff;

  animation-delay: 3s;
`;
