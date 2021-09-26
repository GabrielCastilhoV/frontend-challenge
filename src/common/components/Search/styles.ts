import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  height: 48px;

  background: ${({ theme }) => theme.gray50};
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  svg {
    color: ${({ theme }) => theme.gray100};
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  font-weight: 500;

  &::placeholder {
    color: #54565a;
  }
`;
