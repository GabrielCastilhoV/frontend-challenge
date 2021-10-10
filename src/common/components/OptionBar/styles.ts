import styled from 'styled-components';

export const Container = styled.nav`
  max-width: 768px;
  margin: 2rem auto;

  display: flex;
  align-items: center;

  color: #3f4043;
`;

export const Options = styled.div`
  width: 100%;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  background-color: #ffffff;
  height: 56px;
  border-radius: 2px;

  margin: 0 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  .read,
  .share,
  .listen {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-size: 1rem;
    font-weight: 700;

    transition: all 0.3s;

    &:hover {
      background: ${({ theme }) => theme.gray200};
      color: #fff;
    }
  }

  .listen {
    border-left: 1px solid rgba(151, 151, 151, 0.2);
    border-right: 1px solid rgba(151, 151, 151, 0.2);
  }
`;
