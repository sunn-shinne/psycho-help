import { CSSProperties } from 'react';
import ClockImage from '../../../assets/images/main/chart/clock.svg';

const styles: { [key in string]: CSSProperties } = {
	wrapper: {
		position: "relative",
		zIndex: 0,
	},
	textBlock: {
		display: "flex",
		alignItems: "center",
	},
	schedule: {
		border: "1px black solid",
		borderRadius: "10px",
		padding: "calc((1vh + 1vw) / 2)",
	},
}

const ChartBlock = () => {
	return (
		<div>
			<div className="wrapper" style={styles.wrapper}>
				<div style={{display: "flex", justifyContent: "space-between",}}>
					<div style={styles.textBlock}>
						<h3 style={{marginRight: "calc((1vh + 1vw) / 2)"}}>—</h3>
						<p style={styles.schedule}>
							<h3 style={{marginTop: 0}}>Расписание:</h3>
							понедельник - четверг 9:30-18:30 <br />
							пятница 9:30-17:15 <br />
							перерыв на обед 13:00-13:45
						</p>
					</div>
					<img src={ClockImage} alt="beatifull picture" />
				</div>
				<h3>
					<span style={{marginRight: "calc((1vh + 1vw) / 2)", visibility: "hidden", pointerEvents: "none"}}>—</span>
					В выходные и праздничные дни, ночью, за срочной психологической помощью можно 
					обратиться по следующим телефонам:
				</h3>
				<div style={styles.textBlock}>
					<h3 style={{marginRight: "calc((1vh + 1vw) / 2)"}}>—</h3>
					<p>
						Горячая линия Московской службы психологической помощи населению - 8 (495) 051 
						(с городского телефона) и 051 (с мобильного телефона) <br />
						<strong>Режим работы: круглосуточно</strong>
					</p>
				</div>
				<div style={styles.textBlock}>
					<h3 style={{marginRight: "calc((1vh + 1vw) / 2)"}}>—</h3>
					<p>
						Горячая линия по оказанию психологической помощи студенческой молодежи организованной Минобрнауки России - 8 (800) 222-55-71 <br />
						<strong>Режим работы: круглосуточно</strong>
					</p>
				</div>
				<div style={styles.textBlock}>
					<h3 style={{marginRight: "calc((1vh + 1vw) / 2)"}}>—</h3>
					<p>
						Телефон доверия для детей, подростков и их родителей - 8 (800) 2000-122 <br />
						<strong>Режим работы: круглосуточно</strong>
					</p>
				</div>
				<div style={styles.textBlock}>
					<h3 style={{marginRight: "calc((1vh + 1vw) / 2)"}}>—</h3>
					<p>
						Горячая линия центра экстренной психологической помощи МЧС России - 8 (495) 989-50-50 (бесплатно по Москве) <br />
						<strong>Режим работы: круглосуточно</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ChartBlock