// import Ok from '../../../assets/images/main/footer/ok.svg';
// import Youtube from '../../../assets/images/main/footer/youtube.svg';
import VkIcon from '../../assets/images/main/footer/vk.svg';
import TgIcon from '../../assets/images/main/footer/tg.svg';
import * as St from './footerStyle';

const Footer = () => {
  return (
    <div>
      <St.Wrapper>
        <St.ContentWrapper>
          <St.WrapperBefore></St.WrapperBefore>
          <St.FlexWrap>
            <h3>Служба психологической помощи</h3>
            <h3>Будем рады Вам помочь!</h3>
          </St.FlexWrap>
          <St.Address>
            <h3>Адреса:</h3>
            <St.List>
              <St.ListItem>ул. Большая Семёновская, 38, ауд. В-509</St.ListItem>
              <St.ListItem>ул. Прянишникова, 2а, ауд. 1401</St.ListItem>
              <St.ListItem>ул. Павла Корчагина, 22, ауд. 239</St.ListItem>
              <St.ListItem>ул. Автозаводская, 16, ауд. 1109</St.ListItem>
            </St.List>
          </St.Address>
          <St.FlexWrap>
            <h3>Тел: +7(495) 223-05-41</h3>
            <St.Socials>
              {/* <IconBox>
								<Link href=""><Icon src={Ok} alt="icon" /></Link>
							</IconBox>
							<IconBox>
								<Link href=""><Icon src={Youtube} alt="icon" /></Link>
							</IconBox> */}
              <St.IconBox>
                <St.Link href="https://vk.com/spp_polytech">
                  <St.Icon src={VkIcon} alt="Vk" />
                </St.Link>
              </St.IconBox>
              <St.IconBox>
                <St.Link href="https://t.me/spp_mospolytech">
                  <St.Icon src={TgIcon} alt="Tg" />
                </St.Link>
              </St.IconBox>
            </St.Socials>
          </St.FlexWrap>
          <h3>
            E-mail:{' '}
            <St.Link href="mailto:psycholog@mospolytech.ru">psycholog@mospolytech.ru</St.Link>
          </h3>
          <St.TextWrapper>
            <St.TextBlock>
              <St.Text>
                &copy; 2024 федеральное государственное автономное образовательное учреждение
                высшего образования &laquo;Московский политехнический университет&raquo;,
              </St.Text>
              <St.Text>Московский Политех</St.Text>
            </St.TextBlock>
          </St.TextWrapper>
        </St.ContentWrapper>
      </St.Wrapper>
    </div>
  );
};

export default Footer;
