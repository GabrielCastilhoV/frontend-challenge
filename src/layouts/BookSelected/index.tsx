/* eslint-disable @next/next/no-img-element */
import { BookDetails, Container, Content, Header } from './styles';

import Image from 'next/image';

import { FiArrowLeft } from 'react-icons/fi';

import redOval from '../../../public/images/red-oval.svg';
import blackOval from '../../../public/images/black-oval.svg';
import littleOvalFull from '../../../public/images/little-oval-full.png';
import oval from '../../../public/images/Oval.svg';
import bigOval from '../../../public/images/big-oval-right.png';
import { useRouter } from 'next/router';

import { OptionBar } from '@/common/components/OptionBar';

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type VolumeInfo = {
  authors: Array<[]>;
  description: string;
  imageLinks: ImageLinks;
  subtitle: string;
  title: string;
};

export interface BooksProps {
  book: {
    id: string;
    volumeInfo: VolumeInfo;
  };
}

export const BookSelected = ({ book }: BooksProps) => {
  const router = useRouter();

  function handleToHome() {
    router.push('/');
  }

  return (
    <Container>
      <Content>
        <Header>
          <FiArrowLeft onClick={handleToHome} />
          <figure className="redOval">
            <Image src={redOval} alt="" />
          </figure>
          <figure className="blackOval">
            <Image src={blackOval} alt="" />
          </figure>
          <figure className="littleOvalFull">
            <Image src={littleOvalFull} alt="" />
          </figure>
          <figure className="Oval">
            <Image src={oval} alt="" />
          </figure>
          <figure className="bigOvalDetailPage">
            <Image src={bigOval} alt="" />
          </figure>
          <div className="bookImage">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
        </Header>

        <BookDetails>
          <h2>
            <span>{book.volumeInfo.title}</span>: {book.volumeInfo?.subtitle}
          </h2>

          <h4>{book.volumeInfo.authors}</h4>
          <p>{book.volumeInfo.description}</p>
        </BookDetails>
      </Content>

      <OptionBar />
    </Container>
  );
};
