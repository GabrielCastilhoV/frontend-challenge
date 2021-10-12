import { render, screen } from '@testing-library/react';
import { NavBar } from '../../common/modules/NavBar';

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
    render(<NavBar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Libraries')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
