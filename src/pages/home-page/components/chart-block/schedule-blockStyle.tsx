import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Schedule = styled.p`
  border: 1px black solid;
  border-radius: 10px;
  padding: calc((1vh + 1vw) / 2);
`;

export const ScheduleTitle = styled.h3`
  margin-top: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ScheduleList = styled(List)`
  margin-bottom: 0;
`;

export const TextLine = styled.h3`
  margin-right: calc((1vh + 1vw) / 2);
`;

export const TextLineHidden = styled.span`
  margin-right: calc((1vh + 1vw) / 2);
  visibility: hidden;
  pointer-events: none;
`;

export const TextList = styled(List)``;

export const ListBold = styled.span`
  font-weight: bold;
`;
