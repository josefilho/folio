import { Container, Title, Message, Image } from './styles';

import constructionImg from '../../assets/construction.svg';

const ErrorPage = () => {
  return (
    <Container>
      <Title>Coming Soon...</Title>
      <Message>Under construction</Message>
      <Image src={constructionImg} alt='construction' />
    </Container>
  );
};

export { ErrorPage };
