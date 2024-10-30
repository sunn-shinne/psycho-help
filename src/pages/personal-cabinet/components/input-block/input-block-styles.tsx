import styled from "styled-components";

export const wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const label = styled.label`
	display: flex;
	width: 100%;
	padding: calc((1vh + 1vw) / 2) 0;
`

export const input = styled.input`
	height: 3rem;
	padding: 1rem;
	border-radius: 5px;
	border: 1px black solid;
	width: 100%;
`

export const select = styled.select`
	height: 3rem;
	padding: 0.5rem;
	border-radius: 5px;
	border: 1px black solid;
	width: 100%;
`

export const typeReception = styled.div`
	& button:first-child {
		margin-right: calc((1vh + 1vw) / 2);
	}
	width: 100%;
`

export const btTypeRec = styled.button`
	height: 3rem;
	padding: 0.5rem;
	border-radius: 5px;
	border: 1px black solid;
	min-width: 20%;
	cursor: pointer;
	transition: 0.2s;
`

export const addressTime = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	& Label:last-child {
		flex-shrink: 2;
		margin-left: 3%;
	}
`