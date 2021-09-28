import { Container } from './styles';

import Link from 'next/link';

interface HeaderBookProps {
  title: string;
  nameLink: string;
  url: string;
}

export const HeaderBook = ({ title, nameLink, url }: HeaderBookProps) => {
  return (
    <Container>
      <p>{title}</p>
      <Link href={url}>
        <a>{nameLink}</a>
      </Link>
    </Container>
  );
};
