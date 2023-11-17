import styled from 'styled-components';
import { MainTitle, MainSubtitle, TextCard } from '../../styles/global-styles';

export function Profile({ subTitle }: { subTitle: string }) {
  return (
    <>
      <MainTitle>Artem Shakun</MainTitle>
      <MainSubtitle>Frontend Developer</MainSubtitle>
      <MainDescription>{subTitle}</MainDescription>
    </>
  );
}

const MainDescription = styled(TextCard)`
  max-width: 20rem;
  @media (max-width: 500px) {
    max-width: 100%;
  }
`;
