import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  margin-bottom: 25px;

  p {
    color: ${({ theme }) => theme.gray250};
    font-weight: 600;
  }

  a {
    color: #4abdf1;
  }
`;
