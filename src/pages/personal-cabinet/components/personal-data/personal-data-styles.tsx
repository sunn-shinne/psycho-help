import styled from 'styled-components';
import editImg from '../../../../assets/images/cabinet/edit.svg';

export const wrapper = styled.div`
  padding: calc((1vh + 1vw) / 2);
  width: 100%;
`;

export const head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const edit = styled.div`
  background-image: url(${editImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  height: 44px;
  width: 57px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(0.93);
  }
`;

export const button = styled.button`
  border: 0;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: red;
  }
`;
