import { Container, Title, Message, Image } from './styles';

import error404 from '../../assets/404.svg';

const ErrorPage = () => {
  return (
    <Container>
      <Title>Opa!</Title>
      <Message>Algo de errado não está certo...</Message>
      <Image src={error404} alt='error404' />
    </Container>
  );
};

export { ErrorPage };
