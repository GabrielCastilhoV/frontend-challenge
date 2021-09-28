import { Container, Content, Header, Title } from './styles';

import { Search } from '@/common/components/Search';
import { Banner } from '@/common/components/Banner';
import { CurrentlyBook } from '@/common/components/CurrentlyBook';
import { VideoBanner } from '@/common/components/VideoBanner';
import { NavBar } from '@/common/modules/NavBar';

export const Home = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Search />
          <Title>
            Hi, <span>Mehmed Al Fatih</span> 👋
          </Title>
        </Header>

        <Banner />
        <CurrentlyBook />
        <VideoBanner />
        <NavBar />
      </Content>
    </Container>
  );
};
