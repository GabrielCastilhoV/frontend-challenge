import { GetServerSideProps } from 'next';
import { api } from '@/services/api';
import { BookSelected } from '@/layouts/BookSelected';

export const Book = ({ book }: any) => {
  return <BookSelected book={book} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug }: any = params;

  const { data: book } = await api.get(`/books/v1/volumes/${slug}`);

  return {
    props: { book },
  };
};

export default Book;
