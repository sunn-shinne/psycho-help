import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import * as St from './headerStyle';

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
