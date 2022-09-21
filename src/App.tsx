import { FC, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { AboutPage } from './pages/aboutPage/AboutPage.async';
import { MainPage } from './pages/mainPage/MainPage.async';

import './index.scss';

const App: FC = () => {
  return (
    <div className='app'>
      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>ABOUT</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
