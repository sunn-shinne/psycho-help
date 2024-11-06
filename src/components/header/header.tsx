import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import ModalRegistration from '../../pages/home-page/components/UI/modal/modal-registration';
import ModalLogin from '../../pages/home-page/components/UI/modal/modal-login';
import * as St from './header-style';

const Header = () => {
  return (
    <St.StyledHeader>
      <St.ContentWrapper>
        <Logo />
          <St.modalWrapper>
            <ModalRegistration />
            <ModalLogin />  
          </St.modalWrapper>
      </St.ContentWrapper>
    </St.StyledHeader>
  );
};

export default Header;
