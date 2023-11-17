import React from 'react';
import {
  PopupOverlay,
  PopupContent,
  CloseButton,
  MainContainer,
  Image,
  Container,
  Title,
  SubText,
  Wrapper,
  SocList,
} from './styles';
import { ListDescription } from './list';
import { Labels } from '../about/labels';
import { IPortfolio } from '@/interface/userData';
import { IconList } from './iscon-list';

interface PopupProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  dataPopup: IPortfolio;
}

export const Popup = ({ isOpen, onClose, dataPopup }: PopupProps) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };
  return (
    <PopupOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <PopupContent>
        <CloseButton onClick={() => onClose(false)}>&times;</CloseButton>
        <MainContainer>
          <Image src={dataPopup?.icon} />
        </MainContainer>
        <Container>
          <Wrapper>
            <Title>{dataPopup.title}</Title>
            <SubText>{dataPopup.description}</SubText>
            {dataPopup.listDescription.map(item => (
              <ListDescription key={item.title} listDescription={item} />
            ))}
            <SubText style={{ marginTop: '20px' }}>
              <span>{dataPopup.titleLink}</span>
              <SocList>
                {dataPopup &&
                  dataPopup.link.map((item, index) => (
                    <IconList key={index} icon={item} />
                  ))}
              </SocList>
            </SubText>
          </Wrapper>
          <Wrapper>
            {dataPopup && <Labels technology={dataPopup.technology} />}
          </Wrapper>
        </Container>
      </PopupContent>
    </PopupOverlay>
  );
};
