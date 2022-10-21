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
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>value = {counterValue}</h1>
      <Button theme={ButtonThemes.OUTLINE} onClick={onIncrement}>
        ++
      </Button>
      <Button theme={ButtonThemes.OUTLINE} onClick={onDecrement}>
        --
      </Button>
    </div>
  );
};
