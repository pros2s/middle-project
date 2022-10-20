import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { ButtonThemes } from 'widgets/Button/ui/Button';
import { Modal } from 'widgets/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isLogInModal, setIsLogInModal] = useState<boolean>(false);

  const onToggleModal = () => {
    setIsLogInModal((state) => !state);
  };

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonThemes.INVERTED_CLEAR} onClick={onToggleModal}>
          {t('LogIn')}
        </Button>
        <Modal isOpen={isLogInModal} onClose={onToggleModal}>
          {t(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
          )}
        </Modal>
      </div>
    </div>
  );
};
