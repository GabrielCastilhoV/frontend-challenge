import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const Header = styled.header`
  position: relative;
  height: 282px;
  background-color: #fff6e5;
  border-radius: 0 0 120px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 30px;
    height: 30px;
    color: #000;
    cursor: pointer;

    position: absolute;
    left: 10%;
    top: 55px;
  }

  figure {
    position: absolute;
  }

  .redOval {
    top: 125px;
    left: 47px;
  }

  .blackOval {
    top: 115px;
    left: 74px;
  }

  .bigOvalDetailPage {
    top: 0;
    right: 0;
  }

  .littleOvalFull {
    width: 48px;
    height: 48px;
    bottom: 0;
    right: 89px;
  }

  .Oval {
    top: 86px;
    right: 27%;
  }

  .bookImage {
    position: absolute;
    bottom: -40px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: (0px 10px 20px -2px rgba(0, 0, 0, 0.1));

    img {
      width: 151px;
      height: 234px;
      clip-path: inset(0.1px 0.1px 0.1px 0.1px round 8px);
    }
  }
`;

export const BookDetails = styled.div`
  padding: 67px 20px 0;

  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;
    padding-bottom: 7px;
    text-align: justify;
  }

  h4 {
    font-size: 16px;
    line-height: 19px;

    letter-spacing: 0.670588px;

    color: #ff6978;
    padding-bottom: 10px;
  }

  p {
    font-size: 14px;
    line-height: 25px;
    text-align: justify;

    letter-spacing: 0.2px;

    color: rgba(49, 49, 49, 0.6);
  }
`;
