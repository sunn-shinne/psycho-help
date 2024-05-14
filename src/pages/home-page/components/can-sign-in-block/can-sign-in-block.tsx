import { CSSProperties } from 'react';
import HumanImage from '../../../../assets/images/main/can-sign-in/human.svg';
import PcImage from '../../../../assets/images/main/can-sign-in/pc.svg';

const styles: { [key in string]: CSSProperties } = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    justifyContent: 'center',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  p: {
    marginLeft: 'calc(3vh + 3vw)',
  },
  image: {
    marginLeft: 'calc(3vh + 3vw)',
  },
};

const CanSignInBlock = () => {
  return (
    <div>
      <div style={styles.wrapper}>
        <div style={styles.textBlock}>
          <h3>
            <span style={{ marginRight: 'calc((1vh + 1vw) / 2)' }}>—</span>через форму вконтакте
          </h3>
          <div style={styles.mainInfo}>
            <p style={styles.p}>
              Войдите в группу СПП в ВК — vk.com/spp_polytech 
              <br />
              Внимание! Обязательно дождитесь звонка специалиста и подтверждения записи на
              консультацию.
            </p>
            <img style={styles.image} src={HumanImage} alt="beautifull pictures"></img>
          </div>
        </div>
        <div style={styles.textBlock}>
          <h3>
            <span style={{ marginRight: 'calc((1vh + 1vw) / 2)' }}>—</span>по электроноой почте
          </h3>
          <div style={styles.mainInfo}>
            <p style={styles.p}>
              Чтобы отправить письмо психологу, укажите Ф.И.О., группу (место работы) и ваш
              контактный телефон, по которому, в случае необходимости, можно с вами связаться.{' '}
              <br />
              Для получения компетентного ответа психолога, лаконично, но информативно, опишите свою
              проблему (что беспокоит вас в данный момент с учетом «контекста ситуации»). <br />
              Сформулируйте вопрос (запрос), который хотите задать психологу. <br />
              Письмо рассматривается в течение 2-4 дней. <br />
              Будьте внимательны! Ответ отправляется на указанную вами почту.
            </p>
            <img style={styles.image} src={PcImage} alt="beautifull pictures"></img>
          </div>
        </div>
        <div style={styles.textBlock}>
          <h3>
            <span style={{ marginRight: 'calc((1vh + 1vw) / 2)' }}>—</span>по телефону:
            +7 (495) 223-05-23.
          </h3>
          <div>
            <p style={styles.p}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanSignInBlock;
