import styled from 'styled-components';

interface ContainerProps {
  bg_color: string;
}

interface LeftProps {
  titleIsBig: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 272px;
  padding: 15px 20px;

  background: ${props => props.bg_color};
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;

  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;

  background-image: url('../../../../../BigOval.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  position: relative;

  .rectangle {
    position: absolute;
    left: 53.37%;
    right: 29.72%;
    top: 68.7%;
    bottom: 28.42%;
    z-index: 1;
  }

  .oval {
    position: absolute;
    left: 52.94%;
    right: 40.44%;
    top: 10.07%;
    bottom: 76.98%;
  }

  .triangle {
    position: absolute;
    left: 61.95%;
    right: 25.97%;
    top: 2.73%;
    bottom: 76.97%;
    z-index: 1;
  }
`;

export const Left = styled.div<LeftProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2,
  p {
    color: #eee;
  }

  h2 {
    font-weight: 700;
    letter-spacing: 2px;
    font-size: ${props => (props.titleIsBig ? '1rem' : '2rem')};
  }

  > p {
    letter-spacing: 1.28889px;
    font-style: italic;
  }
  .readNow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding-top: 10px;

    p {
      font-size: 12px;
    }

    span {
      font-weight: 700;
    }

    svg {
      color: ${({ theme }) => theme.gray150};
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;

export const Right = styled.div``;
