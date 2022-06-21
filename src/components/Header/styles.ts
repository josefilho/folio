import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100vw;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

interface NavLinkProps {
  active?: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  flex: 1;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: ${props => (props.active ? '#6A2CF2' : '#EDE6FF')};
  transition: 0.2s ease-in-out;

  & + a {
    padding: 0 0 0 32px;
  }

  &:hover {
    color: ${props =>
      props.active ? shade(0.1, '#6A2CF2') : shade(0.3, '#EDE6FF')};
  }
`;
