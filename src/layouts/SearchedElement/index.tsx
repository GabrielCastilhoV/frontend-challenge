/* eslint-disable @next/next/no-img-element */
import { BooksData, useBooks } from '@/contexts/BooksContexts';
import { Container, Content } from './styles';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { RiLoader3Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

export const SearchedElement = () => {
  const { books, debouncedInput } = useBooks();
  const [end, setEnd] = useState(3);
  const [booksSliced, setBooksSliced] = useState<BooksData[]>([]);
  const [prevInput, setPrevInput] = useState('');

  useEffect(() => {
    try {
      setPrevInput(debouncedInput);
      setBooksSliced(books.slice(0, end));

      if (debouncedInput !== prevInput) {
        setEnd(3);
      }
    } catch (error) {
      toast.error('Book display errors');
    }
  }, [end, books, debouncedInput, prevInput]);

  const handleLoadMore = () => {
    setEnd(booksSliced.length + 3);
  };

  return (
    <Container>
      <Content>
        {books === undefined ? (
          <>
            <div>
              <p>🙁 No results found..</p>
            </div>
          </>
        ) : (
          <>
            {booksSliced.map(book => (
              <div className="booksInfo" key={book.id}>
                <Link href={`book/${book.id}`}>
                  <a>
                    <img
                      src={book.volumeInfo.imageLinks?.thumbnail}
                      alt={book.volumeInfo?.title}
                    />
                    <div>
                      <p>{book.volumeInfo.title}</p>
                      <span>{book.volumeInfo.authors}</span>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </>
        )}
      </Content>

      {books !== undefined && end < books.length && (
        <div className="loadMore" onClick={handleLoadMore}>
          <button>
            <RiLoader3Fill />
            Load More
          </button>
        </div>
      )}
    </Container>
  );
};
