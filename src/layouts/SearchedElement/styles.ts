import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-bottom: 5rem;

  .loadMore {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;

      background: ${({ theme }) => theme.pink300};
      color: #fff;
      border-radius: 0.5rem;

      font-size: 1rem;
      font-weight: 700;

      transition: filter 0.3s;

      &:hover {
        filter: brightness(1.1);
      }

      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 2.65rem 1.2rem;

  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .booksInfo {
    width: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
    color: #313131;

    img {
      width: 100px;
      height: 153px;
      object-fit: contain;
      clip-path: inset(0.1px 0.1px 0.1px 0.1px round 5px);
    }

    p {
      font-weight: 700;
      font-size: 12px;

      margin-top: 9px;
    }

    span {
      color: rgba(49, 49, 49, 0.8);
      font-weight: 900;
      font-size: 10px;
      margin-top: 5px;
    }
  }
`;
