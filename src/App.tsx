import { CSSProperties } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from './pages/home-page/home-page';
import Header from './components/header/header';

const styles: { [key in string]: CSSProperties } = {
  layout: {
    overflow: 'hidden',
    minHeight: '100vh',
    width: '100vw',
  },
};

function App() {
  return (
    <Layout style={styles.layout}>
      <Header />
      <Layout.Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout.Content>
    </Layout>
  );
}

export default App;
