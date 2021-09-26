import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  position: relative;
  z-index: 5;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 25px;

  p {
    color: ${({ theme }) => theme.gray250};
    font-weight: 600;
  }

  a {
    color: #4abdf1;
  }
`;

export const Content = styled.div`
  background-color: #eef5db;
  width: 331px;
  height: 100px;
  position: relative;
  z-index: 2;

  .oval {
    position: absolute;
    clip-path: inset(8px 0 0 0);
    top: -10px;
    right: 50px;
  }

  .rectangle {
    position: absolute;
    bottom: 20%;
    right: 0;
  }

  .ovalFull {
    clip-path: inset(25px 30px 0 0 round 5px);
    border-radius: 0 5px 0 0;
    position: absolute;
    top: -25px;
    right: -30px;
  }
`;

export const Left = styled.div`
  padding-left: 20px;
  position: relative;

  figure {
    position: absolute;
    top: -15px;
  }
`;

export const Right = styled.div`
  padding: 10px 0 10px 118px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 20px;
    letter-spacing: 2px;
  }

  p {
    font-size: 10px;
    color: #74776d;
    padding-top: 5px;
  }

  .currently {
    display: flex;
    align-items: center;
    padding-top: 10px;

    svg {
      color: #9013fe;
    }
  }
`;
