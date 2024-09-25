import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import * as St from './header-style';

const Header = () => {
  return (
    <St.StyledHeader>
      <St.ContentWrapper>
        <Logo />
      </St.ContentWrapper>
    </St.StyledHeader>
  );
};

export default Header;
