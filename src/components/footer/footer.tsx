import { CSSProperties } from 'react';
import { Flex, Layout } from 'antd';
import Ok from '../../../assets/images/main/footer/ok.svg';
import Youtube from '../../../assets/images/main/footer/youtube.svg';
import VkIcon from '../../assets/images/main/footer/vk.svg';
import TgIcon from '../../assets/images/main/footer/tg.svg';

const styles: { [key in string]: CSSProperties } = {
	wrapper: {
		color: "white",
		position: "relative",
		zIndex: 0,
    width: '100%',
    margin: 'auto',
    paddingBlock: 24,
    backgroundColor: '#5E8BF4',
    paddingInline: 0,
	},
	contentWrapper: {
    maxWidth: 1440,
    margin: 'auto',
    width: '100%',
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
			<Layout.Footer style={styles.wrapper}>
				<div style={styles.contentWrapper}>
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
							{/* <div style={styles.iconBox}>
								<a href=""><img style={styles.icon} src={Ok} alt="icon" /></a>
							</div>
							<div style={styles.iconBox}>
								<a href=""><img style={styles.icon} src={Youtube} alt="icon" /></a>
							</div> */}
							<div style={styles.iconBox}>
								<a href="https://vk.com/spp_polytech"><img style={styles.icon} src={VkIcon} alt="Vk" /></a>
							</div>
							<div style={styles.iconBox}>
								<a href="https://t.me/spp_mospolytech"><img style={styles.icon} src={TgIcon} alt="Tg" /></a>
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
			</Layout.Footer>
		</div>
	)
}

export default Footer;