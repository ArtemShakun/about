import GitIcon from '../../assets/images/git-icon.svg';
import YouTube from '../../assets/images/youTube-icon.png';
import { ILinks } from '@/interface/userData';
import { SocListItem, SocImg } from './styles';

export function IconList({ icon }: { icon: ILinks }) {
  return (
    <SocListItem>
      <a href={icon.SocLink} target="_blank" rel="noreferrer">
        <SocImg
          src={icon.name === 'YouTube' ? YouTube : GitIcon}
          alt={icon.name}
        />
      </a>
    </SocListItem>
  );
}
