import { CSSProperties } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from './pages/home-page/home-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
			<Footer />
    </Layout>
  );
}

export default App;
