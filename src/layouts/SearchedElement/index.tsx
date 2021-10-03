/* eslint-disable @next/next/no-img-element */
import { useBooks } from '@/contexts/BooksContexts';
import { Container, Content } from './styles';

import Link from 'next/link';

export const SearchedElement = () => {
  const { books } = useBooks();
  return (
    <Container>
      <Content>
        {books.map(book => (
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
      </Content>
    </Container>
  );
};
