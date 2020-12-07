import styled from 'styled-components';
import { defaultColorLight, secundaryColor } from '../../config/colors';

export const Icon = styled.span`
  background-color: ${defaultColorLight};
  color: ${secundaryColor};
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  ${({ effect }) =>
    effect &&
    effect === 'mostPicked' &&
    `
      box-shadow: 0px 0px 50px #6a49f196;

      ::after {
      position: absolute;
      content: "";
      width: 110px;
      height: 110px;
      border: 2px dashed #AE83C7;
      border-radius: 50%;
    }
  `}

  ${({ effect }) =>
    effect &&
    effect === 'lessPicked' &&
    `
      border: 3px solid #A20862;
  `}
`;
