import React from 'react';

import { Nav, Title, Username } from './styled';
import InitialsIcon from '../InitialsIcon';

const username = 'Fernando Luis Alves';

export default function Header() {
  return (
    <Nav>
      <Title>Squad Management Tool</Title>
      <Username>{username}</Username>
      <InitialsIcon name={username} size={35} fontSize={16} />
    </Nav>
  );
}
