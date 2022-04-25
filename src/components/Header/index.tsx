import React, { useState } from 'react';

import { Container, NavLink } from './styles';

const Header: React.FC = () => {
  const [active, setActive] = useState('home');

  return (
    <Container>
      <div>
        <NavLink
          to='/'
          active={active === 'home'}
          onClick={() => setActive('home')}
        >
          Home
        </NavLink>
        <NavLink
          to='/design'
          active={active === 'design'}
          onClick={() => setActive('design')}
        >
          Design
        </NavLink>
        <NavLink
          to='/apps'
          active={active === 'apps'}
          onClick={() => setActive('apps')}
        >
          Apps
        </NavLink>
        <NavLink
          to='/college'
          active={active === 'college'}
          onClick={() => setActive('college')}
        >
          College
        </NavLink>
      </div>
    </Container>
  );
};

export default Header;
