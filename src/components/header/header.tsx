import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Bell} from '../../assets/images/header/bell.svg';
import { ReactComponent as Profile} from '../../assets/images/header/profile.svg';
import * as St from './header-style';
const Header = () => {
  return (
    <St.StyledHeader>
      <St.ContentWrapper>
        <Logo />
				<St.a href='/'>Главная</St.a>
				<St.a href='/#therapists'>Психологи</St.a>
				<St.a href='/'>Новости</St.a>
				<St.a href='/'>Полезные материалы</St.a>
				<St.a href='/#faq'>FAQ</St.a>
				<St.a href='#'><Bell /></St.a>
				<St.a href='/cabinet'><Profile /></St.a>
      </St.ContentWrapper>
    </St.StyledHeader>
  );
};

export default Header;
