import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Bell } from '../../assets/images/header/bell.svg';
import { ReactComponent as Profile } from '../../assets/images/header/profile.svg';
import ModalRegistration from '../../pages/home-page/components/UI/modal/components/modal-registration';
import ModalLogin from '../../pages/home-page/components/UI/modal/components/modal-login';
import * as St from './header-style';
import ModalWindow from '../../pages/home-page/components/UI/modal/modal';
const Header = () => {
  return (
    <St.StyledHeader>
      <St.ContentWrapper>
        <Logo />
        <St.a href="/">Главная</St.a>
        <St.a href="/#therapists">Психологи</St.a>
        <St.a href="/">Новости</St.a>
        <St.a href="/">Полезные материалы</St.a>
        <St.a href="/faq">FAQ</St.a>
        <St.a href="#">
          <Bell />
        </St.a>
        {/* надо объединить аутентификацию и личный кабинет в одну кнопку 
				в зависимости от того, авторизован пользователь или нет */}
        <St.a href="/cabinet">
          <Profile />
        </St.a>
				<ModalWindow />
          {/* <St.modalWrapper>
            <ModalRegistration />
            <ModalLogin />  
          </St.modalWrapper> */}
      </St.ContentWrapper>
    </St.StyledHeader>
  );
};

export default Header;
