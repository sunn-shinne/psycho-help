import { CSSProperties } from 'react';
import Ok from '../../../assets/images/main/footer/ok.svg';
import Youtube from '../../../assets/images/main/footer/youtube.svg';
import Vk from '../../../assets/images/main/footer/vk.svg';
import Tg from '../../../assets/images/main/footer/tg.svg';

const styles: { [key in string]: CSSProperties } = {
	wrapper: {
		color: "white",
		position: "relative",
		zIndex: 0
	},
	wrapperBefore: {
		content: "",
		position: "absolute",
		width: "200vw", 
		height: "103%",
		background: "rgb(94, 139, 244)",
		zIndex: -1,
		top: 0,
		right: 0,
		bottom: 0,
		left: "-100vw",
	},
	flexWrap: {
		display: "flex",
		justifyContent: "space-between",
	},
	socials: {
		display: "flex"
	},
	iconBox: {
		margin: "0 calc((1vh + 1vw) / 5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {},
	a: {
		color: "white",
	},
}

const Footer = () => {
	return (
		<div>
			<div style={styles.wrapper}>
				<span style={styles.wrapperBefore}/>
				<div style={styles.flexWrap}>
					<h3>Служба психологической помощи</h3>
					<h3>Будем рады Вам помочь!</h3>
				</div>
				<div style={styles.address}>
					<h3>Адреса:</h3>
					<p>
						ул. Большая Семёновская, 38, ауд. В-509 <br />
						ул. Прянишникова, 2а, ауд. 1401 <br />
						ул. Павла Корчагина, 22, ауд. 239 <br />
						ул. Автозаводская, 16, ауд. 1109
					</p>
				</div>
				<div style={styles.flexWrap}>
					<h3>Тел: +7(495) 223-05-41</h3>
					<div style={styles.socials}>
						<div style={styles.iconBox}>
							<a href=""><img style={styles.icon} src={Ok} alt="icon" /></a>
						</div>
						<div style={styles.iconBox}>
							<a href=""><img style={styles.icon} src={Youtube} alt="icon" /></a>
						</div>
						<div style={styles.iconBox}>
							<a href=""><img style={styles.icon} src={Vk} alt="icon" /></a>
						</div>
						<div style={styles.iconBox}>
							<a href=""><img style={styles.icon} src={Tg} alt="icon" /></a>
						</div>
					</div>
				</div>
					<h3>E-mail: <a style={styles.a} href="mailto:psycholog@mospolytech.ru">psycholog@mospolytech.ru</a></h3>
					<div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
						<p style={{textAlign: "center", margin: 0, padding: "calc((1vh + 1vw) / 2)", width: "80%"}}>
							&copy; 2024 федеральное государственное автономное образовательное учреждение высшего образования &laquo;Московский политехнический университет&raquo;,
							<br />Московский Политех
						</p>
					</div>
			</div>
		</div>
	)
}

export default Footer;