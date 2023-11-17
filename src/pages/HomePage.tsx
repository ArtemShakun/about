import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Header } from '../components/header';
import { About } from '../components/about';
import { Popup } from '../components/popup';
import { IPortfolio } from '../interface/userData';
import { GlobalStyles } from 'styles/global-styles';

export function HomePage() {
  const [userData, setUserData] = useState(null);
  const [dataPopup, setDataPopup] = useState<IPortfolio | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [subtitle, setSubTitle] = useState('');

  const handlePopup = async (value: boolean, data: IPortfolio) => {
    setIsPopupOpen(value);
    setDataPopup(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          language ? `/inform_UA.json` : `/inform_EN.json`,
        );

        setUserData(response.data);
        setSubTitle(response.data.subTitle);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [language]);

  // TODO: Дописати теги для accessibility
  // TODO перевірити сайт на accessibility
  // TODO виправити граматичні помилки
  // TODO Поміняти Title на сторінці веб сайту
  // TODO Зробити еффект який би підсвічував блок з іменем
  // TODO Поміняти скрол на попапі
  // TODO Доробити мобільну версію

  return (
    <Container>
      <GlobalStyles disableScroll={isPopupOpen} />
      <Header subtitle={subtitle} />
      {userData && (
        <About
          userData={userData}
          handlePopup={handlePopup}
          language={language}
          setLanguage={setLanguage}
        />
      )}
      {dataPopup && (
        <Popup
          isOpen={isPopupOpen}
          onClose={setIsPopupOpen}
          dataPopup={dataPopup}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 85px 50px;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 25px 10px;
  }
`;
