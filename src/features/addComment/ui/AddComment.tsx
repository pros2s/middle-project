import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getAddCommentText } from '../model/selectors/getAddComment';
import {
  addCommentActions,
  addCommentReducer,
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
  const dispatch = useAppDispatch();

  const inputValue = useSelector(getAddCommentText);

  const onChangeInput = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setCommentText(value));
    },
    [dispatch],
  );

  const sendHandler = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onSendComment(inputValue || '');
      dispatch(addCommentActions.setCommentText(''));
    },
    [dispatch, inputValue, onSendComment],
  );

  return (
    <DynamicReducerLoader reducers={reducers}>
      <form className={classNames(cls.AddComment, [className])}>
        <Input
          value={inputValue}
          onChange={onChangeInput}
          placeholder={t('addNewComment')}
          className={cls.input}
        />
        <Button type='submit' onClick={sendHandler}>
          {t('sendComment')}
        </Button>
      </form>
    </DynamicReducerLoader>
  );
});

export default AddComment;
