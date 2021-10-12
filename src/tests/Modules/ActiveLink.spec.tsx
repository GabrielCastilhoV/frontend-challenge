import { render, screen } from '@testing-library/react';
import { ActiveLink } from '../../common/modules/NavBar/ActiveLink';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('adds active class if then link as currently active', () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>,
    );

    expect(screen.getByText('Home')).toHaveClass('active');
  });
});
