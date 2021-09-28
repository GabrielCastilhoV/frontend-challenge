import { Container } from './styles';
import { CardBanner } from './CardBanner';
import { HeaderBook } from '../HeaderBook';

export const Banner = () => {
  return (
    <Container>
      <HeaderBook title="Discover new book" nameLink="More" url="/" />

      <div className="cards">
        <CardBanner />
      </div>
    </Container>
  );
};
