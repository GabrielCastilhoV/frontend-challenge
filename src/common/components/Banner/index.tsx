import { Container, Header } from './styles';
import { CardBanner } from './CardBanner';

import Link from 'next/link';

export const Banner = () => {
  return (
    <Container>
      <Header>
        <p>Discover new book</p>
        <Link href="/">
          <a>More</a>
        </Link>
      </Header>

      <div className="cards">
        <CardBanner />
      </div>
    </Container>
  );
};
