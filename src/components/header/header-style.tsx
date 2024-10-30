import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledHeader = styled(Layout.Header)`
  height: 100px;
  width: 100%;
  margin: auto;
  background-color: #5e8bf4;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
	align-items: center;
  max-width: 1440px;
  margin: auto;
  width: 100%;
`;

export const a = styled.a`
	text-decoration: none;
	color: white;
	font-weight: bold;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`