import { getCounterValue } from 'entities/counter/model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from 'entities/counter/model/slice/CounterSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'widgets/Button';
import { ButtonThemes } from 'widgets/Button/ui/Button';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(CounterActions.increment());
  };

  const onDecrement = () => {
    dispatch(CounterActions.decrement());
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
