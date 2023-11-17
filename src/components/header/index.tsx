import { useState, useEffect } from 'react';

import { MainContainer, Wrapper, Footer } from './styled';
import { Navigation } from './navigation';
import { Profile } from './profile';
import { Social } from './social';
import { LINK_ABOUT } from '../../constants/links';

interface HeaderProps {
  subtitle: string;
}

export function Header({ subtitle }: HeaderProps) {
  const [scrollCategory, setScrollCategory] = useState<string>(LINK_ABOUT);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach(element => {
      let id = element.getAttribute('id');
      const elementTop =
        element.getBoundingClientRect().top + window.scrollY - 150;

      if (scrollPosition >= elementTop) {
        setScrollCategory(id || '');
      }
    });
  };

  const scrollToCategory = (category: string) => {
    const element = document.querySelector(`[data-scroll="${category}"]`);
    setScrollCategory(category);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MainContainer>
      <Wrapper>
        <Profile subTitle={subtitle} />
        <Navigation
          scrollToCategory={scrollToCategory}
          scrollCategory={scrollCategory}
        />
      </Wrapper>
      <Footer>
        <Social />
      </Footer>
    </MainContainer>
  );
}
