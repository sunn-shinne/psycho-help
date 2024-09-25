import styled from 'styled-components';
import { Layout } from 'antd';

export const Wrapper = styled(Layout.Footer)`
  color: white;
  position: relative;
  z-index: 0;
  width: 100%;
  margin: auto;
  padding-block: 24px;
  background-color: #5e8bf4;
  padding-inline: 0px;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
`;

export const WrapperBefore = styled.span`
  content: '';
  position: absolute;
  width: 200vw;
  height: 103%;
  background: rgb(94, 139, 244);
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: -100vw;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Socials = styled.div`
  display: flex;
`;

export const IconBox = styled.div`
  margin: 0 calc((1vh + 1vw) / 5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img``;

export const Link = styled.a`
  color: white;
`;

export const Address = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextBlock = styled.div`
  text-align: center;
  margin: 0;
  padding: calc((1vh + 1vw) / 2);
  width: 80%;
`;

export const Text = styled.p`
  margin: 0;
`;

export const List = styled.ol`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding-left: 0;
`;
