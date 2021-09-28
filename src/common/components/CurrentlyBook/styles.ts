import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  position: relative;
  z-index: 5;

  .header {
    padding-left: 20px;
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
  gap: 5px;

  h2 {
    font-size: 20px;
    letter-spacing: 2px;
  }

  > p {
    font-size: 10px;
    color: #74776d;
    padding-top: 5px;
  }

  .currently {
    display: flex;
    align-items: center;
    padding-top: 10px;

    p {
      font-size: 10px;
      color: #2a2b26;
      padding-left: 5px;
    }

    span {
      font-weight: 700;
      color: #ff6978;
    }

    svg {
      color: #9013fe;
    }
  }
`;
