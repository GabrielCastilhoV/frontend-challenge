import { Container, Options } from './styles';

import { FiBookOpen, FiHeadphones, FiShare } from 'react-icons/fi';

export function OptionBar() {
  return (
    <Container>
      <Options>
        <div className="read">
          <button type="button">
            <FiBookOpen />
            Read
          </button>
        </div>
        <div className="listen">
          <button type="button">
            <FiHeadphones />
            Listen
          </button>
        </div>
        <div className="share">
          <button type="button">
            <FiShare />
            Share
          </button>
        </div>
      </Options>
    </Container>
  );
}
