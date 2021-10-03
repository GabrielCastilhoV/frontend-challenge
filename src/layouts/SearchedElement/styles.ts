import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 2.65rem 1.2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;

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
      font-family: 'SF Pro Text';
      font-weight: 700;
      font-size: 0.8571rem;
      margin-top: 9px;
    }

    span {
      font-family: 'Roboto';
      font-weight: 900;
      font-size: 0.714285rem;
      margin-top: 5px;
    }
  }
`;
