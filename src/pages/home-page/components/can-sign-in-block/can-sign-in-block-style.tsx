import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
`;
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextLine = styled.span`
  margin-right: calc((1vh + 1vw) / 2);
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MainList = styled.ol`
  margin-left: calc(3vh + 3vw);
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li``;

export const Image = styled.img`
  margin-left: calc(3vh + 3vw);
`;
