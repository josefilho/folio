import React from 'react';

import { NavLink } from 'react-router-dom';
import {
  Container,
  TitleHighlight,
  TitleNormal,
  Subtitle,
  PresentationText,
  TitleContainer,
  BackgroundContainer,
} from './styles';

import background from '../../assets/backgroundQuasar.svg';
import './ButtonStyles.css';

const Quasar: React.FC = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <TitleHighlight>Quasar</TitleHighlight>
          <TitleNormal>Hackathon</TitleNormal>
        </TitleContainer>
        <Subtitle>Bem Vindo(a) ao Quasar!</Subtitle>

        <PresentationText>
          A primeira edição do maior evento cósmico de programação pensada
          especialmente para futuros cientistas da computação.
        </PresentationText>

        <NavLink to='signup' style={{ textDecoration: 'none' }}>
          <div className='button'>Participar</div>
        </NavLink>
      </Container>
      <BackgroundContainer src={background} alt='Background stars' />
    </>
  );
};

export { Quasar };
