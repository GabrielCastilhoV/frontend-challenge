import { Container, Left, Right } from './styles';

import { BiBarChartSquare } from 'react-icons/bi';

import Image from 'next/image';

import bookImg from '../../../../../public/Bitmap.png';

import rectangle from '../../../../../public/images/Rectangle.svg';
import oval from '../../../../../public/images/Oval.svg';
import triangle from '../../../../../public/images/Triangle.svg';

export const CardBanner = () => {
  return (
    <Container>
      <figure className="rectangle">
        <Image src={rectangle} alt="Rectangle" />
      </figure>

      <figure className="oval">
        <Image src={oval} alt="Oval" />
      </figure>

      <figure className="triangle">
        <Image src={triangle} alt="Triangle" />
      </figure>

      <Left>
        <h2>Hooked</h2>
        <p>Nir Eyal</p>

        <div className="readNow">
          <BiBarChartSquare />
          <p>
            <span>120+</span> Read Now
          </p>
        </div>
      </Left>

      <Right>
        <Image src={bookImg} alt="Book" />
      </Right>
    </Container>
  );
};
