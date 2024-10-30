import styled from "styled-components";

export const wrapper = styled.div`
	width: 100%;
	display: flex;
	padding-block: 48px;
  padding-inline: 24px;
`

export const main = styled.main`
	padding: calc((1vh + 1vw) / 2);
	width: 65%;
`

export const aside = styled.aside`
	padding: calc((1vh + 1vw) / 2);
	width: 35%;
`

export const h1 = styled.h1`
	margin-top: 0;
`
export const form = styled.form`
	background-color: #E1E1E1;
	border-radius: 15px;
	padding: calc((1vh + 1vw)) 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const subButton = styled.button`
	border-radius: 16px;
	background-color: #5E8BF4;
	border: 0;
	padding: 1rem 2rem;
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		transform: scale(0.95);
	}
	align-self: flex-start;
`
export const inputBlock = styled.div`
	
`