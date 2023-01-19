import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRaiting } from '@/shared/ui/StarRaiting';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonThemes } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

import cls from './RaitingCard.module.scss';

interface RaitingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starsCount: number, feedback?: string) => void;
  onCancel?: (starsCount: number) => void;
  rate?: number;
}

export const RaitingCard = memo(
  ({
    className,
    feedbackTitle,
    hasFeedback,
    title,
    onAccept,
    onCancel,
    rate = 0,
  }: RaitingCardProps) => {
    const { t } = useTranslation('');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedStarsCount, setSelectedStarsCount] = useState<number>(rate);
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
          <Text title={selectedStarsCount ? t('thanksForRate') : title} />
          <StarRaiting
            onSelect={onSelectStars}
            selectedStars={selectedStarsCount}
          />
        </Flex>
        <BrowserView>
          <Modal isLazy isOpen={isModalOpen} onClose={cancelHandler}>
            <Flex className={cls.modal} direction='column' gap='16'>
              {modalContent}
              <Flex justify='end' gap='8'>
                <Button theme={ButtonThemes.CANCEL} onClick={cancelHandler}>
                  {t('cancelFeedback')}
                </Button>
                <Button onClick={acceptHandler}>{t('sendFeedback')}</Button>
              </Flex>
            </Flex>
          </Modal>
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
      </Card>
    );
  },
);
