import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid='counter'>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1 data-testid='counter-value'>value = {counterValue}</h1>
      <Button
        data-testid='counter-increment'
        theme={ButtonThemes.OUTLINE}
        onClick={onIncrement}
      >
        ++
      </Button>
      <Button
        data-testid='counter-decrement'
        theme={ButtonThemes.OUTLINE}
        onClick={onDecrement}
      >
        --
      </Button>
    </div>
  );
};
