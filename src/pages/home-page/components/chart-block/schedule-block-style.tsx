import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1450px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const centerSpan = styled.span`
  display: flex;
  justify-content: center;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const weekdaysWrapper = styled.div`
  text-align: center;
`;

export const weekdaysList = styled(SpaceBetween)`
  list-style: none;
  padding: 0px;
  width: 1300px;
  margin: 0 auto;
`;

export const weekdaysElement = styled.li`
  width: 400px;
  text-align: center;
`;

export const weekdaysName = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
`;

export const weekdaysTime = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0px;
`;

export const boldSpan = styled.span`
  font-weight: 600;
`;

export const weekdaysDinner = styled.p`
  text-align: center;
  margin-top: 0px;
  border-top: 1px dashed #717785;
  border-bottom: 1px dashed #717785;
  padding: 15px 39px;
  font-size: 24px;
  width: 414px;
`;
export const TextBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const TextList = styled(List)`
  margin-left: 30px;
`;

export const ListBold = styled.span`
  font-weight: bold;
`;
