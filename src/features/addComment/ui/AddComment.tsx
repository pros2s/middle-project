import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Flex } from '@/shared/ui/Stack';
import { useGetAddCommentText } from '../model/selectors/getAddComment';
import {
  addCommentReducer,
  useCommentActions,
} from '../model/slice/AddCommentSlice';

import cls from './AddComment.module.scss';

export interface AddCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addComment: addCommentReducer,
};

const AddComment = memo(({ className, onSendComment }: AddCommentProps) => {
  const { t } = useTranslation('articlesPage');
  const { setCommentText } = useCommentActions();

  const inputValue = useGetAddCommentText();

  const onChangeInput = useCallback(
    (value: string) => {
      setCommentText(value);
    },
    [setCommentText],
  );

  const sendHandler = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onSendComment(inputValue || '');
      setCommentText('');
    },
    [inputValue, onSendComment, setCommentText],
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <form
        className={classNames(cls.AddComment, [className])}
        data-testid='AddComment'
      >
        <Flex align='center' justify='between'>
          <Input
            value={inputValue}
            onChange={onChangeInput}
            placeholder={t('addNewComment')}
            className={cls.input}
            data-testid='AddComment.input'
          />
          <Button
            type='submit'
            disabled={!inputValue}
            onClick={sendHandler}
            data-testid='AddComment.button'
          >
            {t('sendComment')}
          </Button>
        </Flex>
      </form>
    </DynamicReducerLoader>
  );
});

export default AddComment;
