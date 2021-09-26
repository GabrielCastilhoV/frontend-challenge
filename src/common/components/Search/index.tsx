import { Container, Input } from './styles';

import { VscSearch } from 'react-icons/vsc';
import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  book?: string;
}

export const Search = ({ book, ...rest }: IInput) => {
  return (
    <Container>
      <VscSearch />
      <Input placeholder="Search book" {...rest} />
    </Container>
  );
};
