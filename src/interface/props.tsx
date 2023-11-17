import { IPortfolio } from './userData';

export interface IHeaderProps {
  scrollToCategory: (category: string) => void;
  scrollCategory: string;
}

export interface GlobalStylesProps {
  disableScroll: boolean;
}
export type HandlePopupFunction = (value: boolean, data: IPortfolio) => void;
