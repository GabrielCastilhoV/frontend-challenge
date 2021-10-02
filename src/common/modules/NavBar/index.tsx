import { Container, Content } from './styles';
import { ActiveLink } from './ActiveLink';

import { FiHome, FiBook, FiUser } from 'react-icons/fi';

export const NavBar = () => {
  return (
    <Container>
      <Content>
        <ActiveLink activeClassName="active" href="/">
          <a>
            <FiHome />
            Home
          </a>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/libraries">
          <a>
            <FiBook /> Libraries
          </a>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/profile">
          <a>
            <FiUser /> Profile
          </a>
        </ActiveLink>
      </Content>
    </Container>
  );
};
