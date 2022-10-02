import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { ButtonThemes } from 'widgets/Button/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const onToggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', [className])}
      onClick={onToggle}
      theme={ButtonThemes.INVERTED_BACKGROUND}
    >
      {short ? t('ShortLanguage') : t('Language')}
    </Button>
  );
};
