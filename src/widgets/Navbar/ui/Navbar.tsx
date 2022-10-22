import { LoginModal } from 'features/authByUsername';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isLogInModal, setIsLogInModal] = useState<boolean>(false);

  const onOpenLoginForm = () => {
    setIsLogInModal(true);
  };

  const onCloseLoginForm = () => {
    setIsLogInModal(false);
  };

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonThemes.INVERTED_CLEAR} onClick={onOpenLoginForm}>
          {t('LogIn')}
        </Button>
        <LoginModal isOpen={isLogInModal} onClose={onCloseLoginForm} />
      </div>
    </div>
  );
};
