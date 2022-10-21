import { Counter } from 'entities/counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('mainPage');

  return (
    <div>
      {t('mainPageText')}
      <Counter />
    </div>
  );
};

export default MainPage;
