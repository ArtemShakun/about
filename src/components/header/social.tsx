import { SocContainer, SocImg, SocLink } from './styled';

import GitIcon from '../../assets/images/git-icon.svg';
import LinkedInIcon from '../../assets/images/linkedin-icon.svg';

export function Social() {
  return (
    <SocContainer>
      <SocLink href="https://github.com/ArtemShakun" target="_blank">
        <SocImg src={GitIcon} alt="GitHub" />
      </SocLink>
      <SocLink href="https://www.linkedin.com/in/artemshakun/" target="_blank">
        <SocImg src={LinkedInIcon} alt="LinkedIn" />
      </SocLink>
    </SocContainer>
  );
}
