import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStylesProps } from '@/interface/props';

export const COLORS = {
  background: 'rgb(15, 23, 42)',
  backgroundLabel: 'rgba(79, 199, 202, 0.3)',
  title: 'rgb(229 231 235)',
  text: 'rgb(148 163 184)',
  hover: 'rgb(94 234 212)',
  dark: 'rgb(100 116 139)',
};

export const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${COLORS.title};

  @media (max-width: 500px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const MainSubtitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: ${COLORS.title};

  @media (max-width: 500px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const TitleCard = styled.h3`
  color: ${COLORS.title};
  font-weight: 500;
  font-size: 1.12rem;
`;

export const SubTitleCard = styled.h4`
  color: ${COLORS.title};
  font-weight: 500;
  font-size: 0.87rem;
`;

export const CategoryTitle = styled.h4``;

export const TextCard = styled.p`
  color: ${COLORS.text};
  font-size: 1rem;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
      margin: 0;
      padding: 0;
      overflow: ${props => (props.disableScroll ? 'hidden' : 'auto')};
    }

  ul, li {
    margin: 0;
    padding: 0;
    
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;
