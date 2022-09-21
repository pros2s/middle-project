import { FC, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { AboutPage } from './pages/aboutPage/AboutPage.async';
import { MainPage } from './pages/mainPage/MainPage.async';

import './styles/index.scss';
import { useThemes } from './themes/useThemes';

const App: FC = () => {
  const { theme, toggleTheme } = useThemes();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme </button>
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
