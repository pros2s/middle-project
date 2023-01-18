import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card } from '@/shared/ui/Card/Card';
import { Flex } from '@/shared/ui/Stack/Flex';
import { Text } from '@/shared/ui/Text/Text';
import { StarRaiting } from '@/shared/ui/StarRaiting/StarRaiting';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

import cls from './RaitingCard.module.scss';

interface RaitingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starsCount: number, feedback?: string) => void;
  onCancel?: (starsCount: number) => void;
}

export const RaitingCard = memo(
  ({
    className,
    feedbackTitle,
    hasFeedback,
    title,
    onAccept,
    onCancel,
  }: RaitingCardProps) => {
    const { t } = useTranslation('');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedStarsCount, setSelectedStarsCount] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback(
      (starsCount: number) => {
        setSelectedStarsCount(starsCount);

        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept, selectedStarsCount],
    );

    const cancelHandler = () => {
      onCancel?.(selectedStarsCount);
      setIsModalOpen(false);
    };

    const acceptHandler = useCallback(() => {
      onAccept?.(selectedStarsCount, feedback);
      setIsModalOpen(false);
    }, [feedback, onAccept, selectedStarsCount]);

    const modalContent = (
      <>
        <Text title={feedbackTitle} />
        <Input
          placeholder={t('leaveFeedback')}
          value={feedback}
          onChange={setFeedback}
        />
      </>
    );
    return (
      <Card className={classNames('', [className])}>
        <Flex direction='column' align='center' gap='8'>
          <Text title={title} />
          <StarRaiting onSelect={onSelectStars} />
        </Flex>
        <Modal isLazy isOpen={isModalOpen}>
          <BrowserView>
            <Flex direction='column' gap='16'>
              {modalContent}
              <Flex justify='end' gap='8'>
                <Button theme={ButtonThemes.CANCEL} onClick={cancelHandler}>
                  {t('cancelFeedback')}
                </Button>
                <Button onClick={acceptHandler}>{t('sendFeedback')}</Button>
              </Flex>
            </Flex>
          </BrowserView>
          <MobileView>
            <Drawer isOpen={isModalOpen} onClose={cancelHandler} isLazy>
              <Flex direction='column' gap='16' className={cls.mobileModal}>
                {modalContent}
                <Button onClick={acceptHandler} fullWidth>
                  {t('sendFeedback')}
                </Button>
              </Flex>
            </Drawer>
          </MobileView>
        </Modal>
      </Card>
    );
  },
);
