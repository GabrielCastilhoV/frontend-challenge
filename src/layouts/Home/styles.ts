import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 768px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 2rem 1.2rem 1.8rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 1.9rem 0;

  span {
    color: ${({ theme }) => theme.pink300};
  }
`;
