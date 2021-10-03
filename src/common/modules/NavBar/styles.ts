import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;

  width: 100%;
  height: 65px;
`;

export const Content = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 50px;
  max-width: 768px;
  background: #fff;

  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    color: #bfbebf;
    font-size: 12px;
    transition: 0.2s;

    &:hover {
      color: #000;
    }

    &.active {
      color: #000;

      svg {
        color: #000;
      }
    }

    svg {
      width: 20px;
      height: 20px;

      color: #bfbebf;
    }
  }
`;
