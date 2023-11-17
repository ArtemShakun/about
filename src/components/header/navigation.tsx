import { Nav, NavigationList, NavigationItem } from './styled';
import { IHeaderProps } from '../../interface/props';
import {
  LINK_ABOUT,
  LINK_EXPERIENCE,
  LINK_PROJECTS,
  LINK_BLOG,
  LINK_SKILLS,
} from '../../constants/links';

export const Navigation = ({
  scrollToCategory,
  scrollCategory,
}: IHeaderProps) => {
  return (
    <Nav>
      <NavigationList>
        <NavigationItem
          className={LINK_ABOUT === scrollCategory ? 'active' : ''}
          onClick={() => scrollToCategory(LINK_ABOUT)}
        >
          {LINK_ABOUT}
        </NavigationItem>

        <NavigationItem
          id={LINK_EXPERIENCE}
          className={LINK_EXPERIENCE === scrollCategory ? 'active' : ''}
          onClick={() => scrollToCategory(LINK_EXPERIENCE)}
        >
          {LINK_EXPERIENCE}
        </NavigationItem>

        <NavigationItem
          id={LINK_PROJECTS}
          className={LINK_PROJECTS === scrollCategory ? 'active' : ''}
          onClick={() => scrollToCategory(LINK_PROJECTS)}
        >
          {LINK_PROJECTS}
        </NavigationItem>

        <NavigationItem
          className={LINK_SKILLS === scrollCategory ? 'active' : ''}
          onClick={() => scrollToCategory(LINK_SKILLS)}
        >
          {LINK_SKILLS}
        </NavigationItem>

        <NavigationItem
          className={LINK_BLOG === scrollCategory ? 'active' : ''}
          onClick={() => scrollToCategory(LINK_BLOG)}
        >
          {LINK_BLOG}
        </NavigationItem>
      </NavigationList>
    </Nav>
  );
};
