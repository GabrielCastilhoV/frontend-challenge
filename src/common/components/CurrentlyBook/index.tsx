import { Container, Content, Left, Header, Right } from './styles';

import Link from 'next/link';
import Image from 'next/image';
import { BiBook } from 'react-icons/bi';

import book2 from '../../../../public/images/Book2.jpg';
import rectangle from '../../../../public/images/Rectangle.svg';
import oval from '../../../../public/images/Oval.svg';
import ovalFull from '../../../../public/images/OvalFull.png';

export const CurrentlyBook = () => {
  return (
    <Container>
      <Header>
        <p>Currently Reading</p>
        <Link href="/">
          <a>All</a>
        </Link>
      </Header>

      <Content>
        <figure className="rectangle">
          <Image src={rectangle} alt="Rectangle" />
        </figure>

        <figure className="oval">
          <Image src={oval} alt="Oval" />
        </figure>

        <figure className="ovalFull">
          <Image src={ovalFull} alt="OvalFull" />
        </figure>

        <Left>
          <figure>
            <Image src={book2} alt="Book" />
          </figure>
        </Left>

        <Right>
          <h2>Originals</h2>
          <p>by Adam Grant</p>

          <div className="currently">
            <BiBook />
            <p>
              Chapter <span>2</span> From 9
            </p>
          </div>
        </Right>
      </Content>
    </Container>
  );
};
