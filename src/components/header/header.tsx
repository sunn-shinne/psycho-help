import { CSSProperties } from 'react';
import { Flex, Layout } from 'antd';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const styles: { [key in string]: CSSProperties } = {
  header: {
    height: 100,
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
};

const Header = () => {
  return (
    <Layout.Header style={styles.header}>
      <Flex style={styles.contentWrapper} justify="space-between">
        <Logo />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
