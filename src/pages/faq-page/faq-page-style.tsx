import styled from 'styled-components';

export const wrapper = styled.div``;

export const headerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: transparent;
  z-index: 0;
  position: relative;
  max-width: 1440px;
  margin: auto;
  padding-inline: 32px;
`;

export const header = styled.div`
  background: #d9e5ff;
`;

export const faqName = styled.div`
  flex-basis: 45%;
`;

export const faq = styled.h1`
  font-size: 8rem;
  margin: 0;
`;

export const description = styled.p``;

export const questions = styled.div`
  padding: calc((1vh + 1vw) * 2);
`;
