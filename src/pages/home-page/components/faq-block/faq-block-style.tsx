import styled from 'styled-components';

export const wrapper = styled.div `

`;

export const header = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	z-index: 0;
	position: relative;

	  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -48px;
    left: 0;
    width: 200vw;
    height: calc(100% + 48px);
    background: #d9e5ff;
    z-index: -1;
		transform: translateX(-25%);
  }
`;

export const faqName = styled.div `
	flex-basis: 45%;
`;

export const faq = styled.h1 `
	font-size: 8rem;
	margin: 0;
`;

export const description = styled.p `

`;

export const questions = styled.div`
  padding: calc((1vh + 1vw) * 2);
`;