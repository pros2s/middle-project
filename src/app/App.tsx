import { FC, Suspense } from 'react';
import { Route, Link, Routes } from 'react-router-dom';

import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';

import { classNames } from 'shared/lib/classNames/classNames';
import { useThemes } from 'app/providers/ThemesProvider';

import './styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useThemes();

  return (
    <div className={classNames('app', [theme], {})}>
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
