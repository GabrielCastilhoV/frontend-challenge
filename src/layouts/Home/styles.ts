import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 3.12rem 2rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 1.9rem 0;

  span {
    color: ${({ theme }) => theme.pink300};
  }
`;
