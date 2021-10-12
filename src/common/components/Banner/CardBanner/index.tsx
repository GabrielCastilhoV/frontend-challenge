import { Container, Left, Right } from './styles';

import { BiBarChartSquare } from 'react-icons/bi';

import Image from 'next/image';

import bookImg from '../../../../../public/Bitmap.png';

import rectangle from '../../../../../public/images/Rectangle.svg';
import oval from '../../../../../public/images/Oval.svg';
import triangle from '../../../../../public/images/Triangle.svg';

interface CardBannerProps {
  bg: string;
  title: string;
  author: string;
  number: number;
  titleIsBig?: boolean;
}

export const CardBanner = ({
  bg,
  title,
  author,
  number,
  titleIsBig = false,
}: CardBannerProps) => {
  return (
    <Container bg_color={bg}>
      <figure className="rectangle">
        <Image src={rectangle} alt="Rectangle" />
      </figure>

      <figure className="oval">
        <Image src={oval} alt="Oval" />
      </figure>

      <figure className="triangle">
        <Image src={triangle} alt="Triangle" />
      </figure>

      <Left titleIsBig={titleIsBig}>
        <h2>{title}</h2>
        <p>{author}</p>

        <div className="readNow">
          <BiBarChartSquare />
          <p>
            <span>{number}+</span> Read Now
          </p>
        </div>
      </Left>

      <Right>
        <Image src={bookImg} alt="Book" />
      </Right>
    </Container>
  );
};
