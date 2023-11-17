import { MainContainer, MainText, MainBlock } from './styled';
import { IUserData, IExperience } from '../../interface/userData';
import { HandlePopupFunction } from '../../interface/props';
import { Experience } from './experience';
import { Portfolio } from './portfolio';
import {
  LINK_ABOUT,
  LINK_EXPERIENCE,
  LINK_PROJECTS,
  LINK_SKILLS,
} from '../../constants/links';
import styled from 'styled-components';
import UkraineFlag from '../../assets/images/ukraine.png';
import EnglishFlag from '../../assets/images/united-kingdom.png';
import { Switch } from '../switch/switch';
import { Skills } from '../skills';

export function About({
  userData,
  handlePopup,
  language,
  setLanguage,
}: {
  userData: IUserData;
  handlePopup: HandlePopupFunction;
  language: boolean;
  setLanguage: (language: boolean) => void;
}) {
  const { aboutMe, experience, portfolio, skills } = userData;

  const compareDates = (a: IExperience, b: IExperience) => {
    const dateA = new Date(a.period.split('–')[0].trim());
    const dateB = new Date(b.period.split('–')[0].trim());
    return dateB.getTime() - dateA.getTime();
  };

  const sortedExperience = [...experience].sort(compareDates);
  return (
    <MainContainer>
      <WrapperFlag>
        <LanguageSwitcher src={UkraineFlag} />
        <Switch language={language} setLanguage={setLanguage} />
        <LanguageSwitcher src={EnglishFlag} />
      </WrapperFlag>
      <MainText id={LINK_ABOUT} data-scroll={LINK_ABOUT}>
        {aboutMe}
      </MainText>

      <MainBlock id={LINK_EXPERIENCE} data-scroll={LINK_EXPERIENCE}>
        {experience &&
          sortedExperience.map(item => (
            <Experience key={item.id} data={item} />
          ))}
      </MainBlock>
      <MainBlock id={LINK_PROJECTS} data-scroll={LINK_PROJECTS}>
        {portfolio.map(item => (
          <Portfolio key={item.id} data={item} handlePopup={handlePopup} />
        ))}
      </MainBlock>
      <MainBlock id={LINK_SKILLS} data-scroll={LINK_SKILLS}>
        {skills.map(item => (
          <Skills key={item.id} data={item} />
        ))}
      </MainBlock>
    </MainContainer>
  );
}

const LanguageSwitcher = styled.img`
  width: 35px;
  cursor: pointer;
  padding: 0 5px;
`;

const WrapperFlag = styled.div`
  display: flex;
  position: absolute;
  top: -50px;
  right: 0;
  align-items: center;
`;
