import { NavigationList, NavigationItem } from './styled';

type LabelsProp = {
  technology: string[];
};

export function Labels({ technology }: LabelsProp) {
  return (
    <NavigationList>
      {technology.map(item => (
        <NavigationItem key={item}>{item}</NavigationItem>
      ))}
    </NavigationList>
  );
}
