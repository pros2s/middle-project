import { memo, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../loginForm/LoginFrom.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo(
  ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
      isLazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  ),
);
