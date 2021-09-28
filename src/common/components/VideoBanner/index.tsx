import { HeaderBook } from '../HeaderBook';
import { Container, Content } from './styles';

import Image from 'next/image';

import videoImg from '../../../../public/images/video.jpg';

export const VideoBanner = () => {
  return (
    <Container>
      <HeaderBook title="Reviews of The Days" nameLink="All Video" url="/" />

      <Content>
        <figure>
          <Image src={videoImg} alt="Video" />
        </figure>
      </Content>
    </Container>
  );
};
