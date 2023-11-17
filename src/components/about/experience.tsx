import { Labels } from './labels';
import { IExperience } from '../../interface/userData';
import {
  Link,
  Container,
  Date,
  Description,
  SubTitle,
  Title,
  Text,
} from './styled';

interface ExperienceProps {
  data: IExperience;
}

export function Experience({ data }: ExperienceProps) {
  return (
    <Link href={data.linkCompany} target="_blank">
      <Container>
        <Date>{data.period}</Date>
        <Description>
          <Title>{data.company}</Title>
          {data.project.map(item => (
            <div key={item.id}>
              <SubTitle>{item.title}</SubTitle>
              <Text>{item.description}</Text>
            </div>
          ))}
          <Labels technology={data.technology} />
        </Description>
      </Container>
    </Link>
  );
}
