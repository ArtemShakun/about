import styled from 'styled-components';
import { COLORS } from 'styles/global-styles';

export function Switch({
  language,
  setLanguage,
}: {
  language: boolean;
  setLanguage: (language: boolean) => void;
}) {
  return (
    <LabelSwitch>
      <InputSwitch type="checkbox" onChange={() => setLanguage(!language)} />
      <SliderSwitch></SliderSwitch>
    </LabelSwitch>
  );
}

const LabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
`;

const SliderSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${COLORS.dark};
  transition: 0.4s;
  border-radius: 24px;

  &::before {
    position: absolute;
    content: '';
    width: 18px;
    height: 18px;
    left: 1px;
    bottom: 3px;
    background-color: ${COLORS.title};
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const InputSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SliderSwitch} {
    background-color: ${COLORS.backgroundLabel};
    &::before {
      transform: translateX(26px);
    }
  }
`;
