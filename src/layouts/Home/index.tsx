import { Container, Content, Header, Title } from './styles';

import { SearchBook } from '@/common/components/SearchBook';
import { Banner } from '@/common/components/Banner';
import { CurrentlyBook } from '@/common/components/CurrentlyBook';
import { VideoBanner } from '@/common/components/VideoBanner';
import { NavBar } from '@/common/modules/NavBar';
import { SearchedElement } from '@/layouts/SearchedElement';

import { useBooks } from '@/contexts/BooksContexts';

export const Home = () => {
  const { debouncedInput } = useBooks();

  return (
    <Container>
      <Content>
        <SearchBook />
        {debouncedInput !== '' ? (
          <>
            <SearchedElement />
          </>
        ) : (
          <>
            <Header>
              <Title>
                Hi, <span>Mehmed Al Fatih</span> 👋
              </Title>
            </Header>

            <Banner />
            <CurrentlyBook />
            <VideoBanner />
          </>
        )}

        <NavBar />
      </Content>
    </Container>
  );
};
