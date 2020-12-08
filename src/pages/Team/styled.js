import styled from 'styled-components';
import { Col } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const Form = styled.form`
  ${Col} {
    margin: 0 10%;
  }

  input[type='text'],
  textarea {
    display: flex;
    width: 100%;
    font-size: 14px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #dadada;
    margin: 10px 0 0;
    transition: 0.3s;
  }

  input[type='text']:focus,
  textarea:focus {
    border-color: ${colors.primaryColor};
  }

  input[type='text']::placeholder,
  textarea::placeholder {
    color: #dadada;
  }

  label {
    transition: 0.3s;
    font-weight: 600;
    display: block;
    margin-top: 30px;
  }
`;
