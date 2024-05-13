import { useState, CSSProperties } from 'react';
import buttonImage from '../../../assets/images/main/question/button.svg';
import ActivebuttonImage from '../../../assets/images/main/question/active-button.svg';

const Question = ({id, ask, answer }: {id: Number; ask: string; answer: string }) => {
	
	const [isHovered, setIsHovered] = useState(false)
	const [isActive, setActive] = useState(false)

	function OnClick () {
		setActive((isActive) => !isActive);
	}

	const styles: { [key in string]: CSSProperties } = {
		wrapper: {
			width: "100%",
			height: "auto",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: isHovered ? 'rgb(230, 230, 230)' : 'rgb(240, 240, 240)',
			marginTop: "calc((1vh + 1vw) / 4)",
			padding: "0 calc((1vh + 1vw) / 2)",
			cursor: "pointer",
		},
		button: {
			borderRadius: "50%",
			height: 30,
			width: 30,
			backgroundImage: `url(${buttonImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			marginLeft: "calc((1vh + 1vw) / 2)"
		},
		p: {
			wordBreak: "break-word",
			flexGrow: 1,
			width: "100%",
			whiteSpace: 'pre-wrap',
		}
	}

	return (
		<div>
			<div style={{...styles.wrapper, marginTop: `${id === 1 ? "0" : "calc((1vh + 1vw) / 4)"}`}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={OnClick}>
				<p style={styles.p}>{ask}{isActive && <><br /> <br />{answer}</>}</p>
				<div style={{...styles.button, backgroundImage: `url(${isActive ? ActivebuttonImage : buttonImage})`}}></div>
			</div>
		</div>
	)
}

export default Question;