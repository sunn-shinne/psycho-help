import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {

    }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

export const Form = styled.form`
  label {
    margin-bottom: 10px;
    display: block;
  }
`;

export default GlobalStyles;
