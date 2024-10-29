import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import ModalRegistration from '../../pages/home-page/components/UI/modal/modal-registration';
import * as St from './header-style';

const Header = () => {
  return (
    <St.StyledHeader>
      <St.ContentWrapper>
        <Logo />
        <ModalRegistration></ModalRegistration>
      </St.ContentWrapper>
    </St.StyledHeader>
  );
};

export default Header;
