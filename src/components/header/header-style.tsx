import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledHeader = styled(Layout.Header)`
  height: 100px;
  width: 100%;
  margin: auto;
  padding-block: 24px;
  background-color: #5e8bf4;
  padding-inline: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;
  width: 100%;
`;

export  const modalWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`
