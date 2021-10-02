import { Container, Input, Label } from './styles';
import { VscSearch } from 'react-icons/vsc';

import { InputHTMLAttributes, useEffect, useState } from 'react';

import { api } from '@/services/api';
import { useBooks } from '@/contexts/BooksContexts';
import { toast } from 'react-toastify';
import useDebounce from '@/hooks/useDebounce';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchBook = ({ ...rest }: IInput) => {
  const [value, setValue] = useState('');
  const { setBooks, setDebouncedInput } = useBooks();
  const debouncedValue = useDebounce<string>(value, 1000);

  useEffect(() => {
    async function loadBooks() {
      try {
        if (value !== '') {
          const response = await api.get(
            `/books/v1/volumes?q=${value}&maxResults=9`,
          );
          const { items } = response.data;

          setBooks(items);
        }
      } catch (error) {
        toast.error('Error fetching books');
      } finally {
        setDebouncedInput(debouncedValue);
      }
    }
    loadBooks();
  }, [debouncedValue, setBooks, setDebouncedInput, value]);

  return (
    <Container>
      <Label>
        <VscSearch />
        <Input
          placeholder="Search book"
          {...rest}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Label>
    </Container>
  );
};
