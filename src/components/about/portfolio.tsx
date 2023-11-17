import { Container, Image, Description, Title, Text } from './styled';

import { IPortfolio } from '@/interface/userData';
import { HandlePopupFunction } from '@/interface/props';

export function Portfolio({
  data,
  handlePopup,
}: {
  data: IPortfolio;
  handlePopup: HandlePopupFunction;
}) {
  return (
    <Container onClick={() => handlePopup(true, data)}>
      <Image src={data.icon} />
      <Description>
        <Title>{data.title}</Title>
        <Text>{data.description}</Text>
      </Description>
    </Container>
  );
}
