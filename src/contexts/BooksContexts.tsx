import {
  createContext,
  ReactNode,
  useState,
  useContext,
  SetStateAction,
} from 'react';

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

export interface BooksData {
  id: string;
  volumeInfo: VolumeInfo;
}

interface BooksContextData {
  books: BooksData[];
  setBooks: React.Dispatch<SetStateAction<BooksData[]>>;
  debouncedInput: string;
  setDebouncedInput: React.Dispatch<SetStateAction<string>>;
}

interface BooksProviderProps {
  children: ReactNode;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

export function BooksProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<BooksData[]>([]);
  const [debouncedInput, setDebouncedInput] = useState('');

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        debouncedInput,
        setDebouncedInput,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  const { books, setBooks, debouncedInput, setDebouncedInput } = context;

  return {
    books,
    setBooks,
    debouncedInput,
    setDebouncedInput,
  };
}
