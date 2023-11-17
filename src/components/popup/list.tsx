import { IListDescription } from '../../interface/userData';
import { SubTitle, List } from './styles';

export const ListDescription = ({
  listDescription,
}: {
  listDescription: IListDescription;
}) => {
  return (
    <>
      <SubTitle>{listDescription.title}</SubTitle>
      <List>
        {listDescription.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </>
  );
};
