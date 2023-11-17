import styled, { keyframes } from 'styled-components';
import { TitleCard, MainSubtitle } from '../../styles/global-styles';
import { COLORS } from '../../styles/global-styles';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopupOverlay = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const PopupContent = styled.div`
  background: rgba(15, 23, 42);
  border-radius: 8px;
  width: 70%;
  max-width: 1100px;
  height: 550px;
  padding: 20px;
  position: relative;
  display: flex;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

export const MainContainer = styled.main`
  position: sticky;
  top: 85px;
  width: 50%;
  height: 65vh;
`;
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
export const Image = styled.img`
  width: 90%;
  height: 530px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled(MainSubtitle)`
  margin: 30px auto 15px;
`;

export const SubText = styled.div`
  color: ${COLORS.text};
  font-size: 1rem;
`;

export const SubTitle = styled(TitleCard)`
  margin-top: 1.25rem;
`;

export const List = styled.ul`
  color: ${COLORS.text};
  list-style-type: decimal;
  margin-left: 20px;
`;

export const Wrapper = styled.div``;

export const SocList = styled.ul`
  display: flex;
  margin-top: 10px;
  margin-bottom: 50px;
  list-style: none;
`;

export const SocListItem = styled.li`
  padding: 10px;
`;

export const SocImg = styled.img`
  width: 30px;
  &:hover {
    filter: brightness(130%);
  }
`;
