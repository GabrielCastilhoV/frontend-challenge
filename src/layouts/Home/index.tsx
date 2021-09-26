import { Container, Content, Title } from './styles';

import { Search } from '@/common/components/Search';

export const Home = () => {
  return (
    <Container>
      <Content>
        <Search />
        <Title>
          Hi, <span>Mehmed Al Fatih</span> 👋
        </Title>
      </Content>
    </Container>
  );
};
