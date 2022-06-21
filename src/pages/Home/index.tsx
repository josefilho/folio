import React from 'react';

import { Container, Text, Image, TextHighlight, TextContainer } from './styles';

import laptop from '../../assets/laptop.svg';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Text>
            Olá, me chamo Jose Carlos estou cursando
            <TextHighlight> Ciência da Computação</TextHighlight> na
            Universidade Estadual do Mato Grosso do Sul (UEMS).
            <br />
            <br /> Sou interessado em programação desde os meus 12 anos e estudo
            isso desde os meus 17. Atualmente estudo{' '}
            <TextHighlight>
              Typescript, Javascript, React, React Native e Nodejs, MySQL
            </TextHighlight>
            . Em busca do T Full Stack! <p />
            Tenho uma base de programação em{' '}
            <TextHighlight>C e C++</TextHighlight> muito sólida por programar
            nessas duas linguagens em todos os anos de faculdade. <p />
            <br />
            Amo o design e faço interfaces por hobby.
            <br />
            <br />
            Fiz estudos para uma iniciação científica que suscintamente tinha o
            objetivo de estudo de conceitos de design e também utilizava o{' '}
            <TextHighlight>React Native</TextHighlight> para implementação da
            aplicação.
            <br />
            <br />
            Fui participante do{' '}
            <TextHighlight>Bootcamp GoStack 14</TextHighlight> da Rocketseat 💜.
          </Text>
        </TextContainer>
        <Image src={laptop} alt='laptop' />
      </Container>
      <Footer />
    </>
  );
};

export { Home };
