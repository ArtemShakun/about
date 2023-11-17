import styled from 'styled-components';
import {
  COLORS,
  TitleCard,
  SubTitleCard,
  TextCard,
} from '../../styles/global-styles';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const MainText = styled.article`
  color: ${COLORS.text};
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
export const MainBlock = styled.section`
  margin-bottom: 100px;

  @media (max-width: 800px) {
    margin-bottom: 0px;
  }
`;

export const Container = styled.section`
  display: flex;
  padding: 20px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(39, 48, 68, 0.5);
    border-radius: 10px;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
    h3 {
      color: ${COLORS.hover};
      text-shadow: 1px 1px 1px #000;
      transition: color 0.3s ease, text-shadow 0.3s ease;

      &::after {
        top: -3px;
        margin-left: 6px;
        transition: top 0.3s ease;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0 0 40px;
    &:hover {
      pointer-events: none;
    }
  }
`;

export const Date = styled.time`
  display: block;
  width: 30%;
  color: ${COLORS.dark};
  font-weight: 500;
  font-size: 0.87rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Description = styled.article`
  position: relative;
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled(TitleCard)`
  &:after {
    content: '→';
    display: inline-block;
    transform: rotate(-50deg);
    font-size: 1rem;
    margin-left: 4px;
    position: absolute;
  }
`;
export const SubTitle = styled(SubTitleCard)`
  margin: 10px 0 5px;
`;

export const Text = styled(TextCard)`
  margin-top: 20px;
  @media (max-width: 500px) {
    text-align: justify;
  }
`;

export const Link = styled.a``;

export const Image = styled.img`
  display: block;
  width: 30%;
  padding-right: 25px;
  height: 130px;
  object-fit: cover;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
`;

export const NavigationItem = styled.li`
  padding: 5px 10px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  color: ${COLORS.hover};
  text-shadow: 1px 1px 1px #000;
  font-size: 0.87rem;
  background-color: ${COLORS.backgroundLabel};
  border-radius: 50px;
`;
