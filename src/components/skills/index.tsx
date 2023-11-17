import styled from 'styled-components';
import { COLORS } from 'styles/global-styles';
import { ISkills } from '@/interface/userData';

export function Skills({ data }: { data: ISkills }) {
  return (
    <Container>
      <Date>{data.name}</Date>
      <Description>
        {data.technologies.map(item => (
          <List key={item}>
            <li>{item}</li>
          </List>
        ))}
      </Description>
    </Container>
  );
}

export const Date = styled.time`
  display: block;
  width: 30%;
  color: ${COLORS.title};
  font-weight: 500;
  font-size: 0.87rem;
`;

export const Container = styled.section`
  padding: 20px;
  width: 100%;
  display: flex;
  }
`;

export const Description = styled.article`
  position: relative;
  width: 70%;
`;

const List = styled.ul`
  color: ${COLORS.text};
  list-style: none;
`;
