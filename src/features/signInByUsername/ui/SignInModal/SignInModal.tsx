import { memo, Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { SignInByUsernameAsync } from '../SignInByUsername/SignInByUsername.async';

interface SignInModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal = memo(
  ({ className, isOpen, onClose }: SignInModalProps) => (
    <Modal
      isLazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', [className])}
    >
      <Suspense fallback={<Loader />}>
        <SignInByUsernameAsync />
      </Suspense>
    </Modal>
  ),
);
