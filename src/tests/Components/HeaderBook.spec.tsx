import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { HeaderBook } from '../../common/components/HeaderBook';

const book = {
  title: 'My book',
  nameLink: 'My link',
  url: '/2',
};

describe('HeaderBook Component', () => {
  it('renders correctly', () => {
    render(
      <HeaderBook title={book.title} nameLink={book.nameLink} url={book.url} />,
    );

    expect(screen.getByText('My book')).toBeInTheDocument();
    expect(screen.getByText('My link')).toBeInTheDocument();
  });
});
