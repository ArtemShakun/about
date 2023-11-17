import styled from 'styled-components';
import { COLORS } from '../../styles/global-styles';

export const MainContainer = styled.header`
  position: sticky;
  top: 85px;
  width: 50%;
  height: 65vh;

  @media (max-width: 500px) {
    top: 0px;
    position: relative;
    width: 100%;
    height: 200px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  height: 75vh;
  @media (max-width: 500px) {
    height: 0px;
  }
`;

export const Footer = styled.footer`
  bottom: 0;
  height: 20vh;
`;

export const Nav = styled.nav`
  margin-top: 70px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li`
  margin-top: 15px;
  font-size: 0.87rem;
  font-weight: 700;
  display: block;
  cursor: pointer;
  color: ${COLORS.dark};
  position: relative;
  padding-left: 30px;
  max-width: 70px;
  transition: padding 0.3s ease, left 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    width: 30px;
    height: 2px;
    background-color: ${COLORS.text};
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover,
  &.active {
    color: ${COLORS.title};
    padding-left: 60px;

    &:before {
      width: 60px;
      background-color: ${COLORS.title};
    }
  }
`;

export const SocContainer = styled.div`
  display: flex;
  justify-content: start;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const SocImg = styled.img`
  width: 30px;
  padding-right: 15px;

  &:hover {
    filter: brightness(130%);
  }
`;

export const SocLink = styled.a``;
