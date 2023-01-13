
import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
  val: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  readOnly?: boolean;
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  readOnly,
  onChange,
  value,
}: SelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionList = useMemo(
    () =>
      options?.map((option) => (
        <option className={cls.option} value={option.val} key={option.val}>
          {option.content}
        </option>
      )),
    [options],
  );

  return (
    <div
      className={classNames(cls.Select, [className], {
        [cls.readOnly]: readOnly,
      })}
    >
      {label && <p className={cls.label}>{`${label}>`}</p>}
      <select
        className={cls.select}
        disabled={readOnly}
        onChange={onChangeHandler}
        value={value}
      >
        {optionList}
      </select>
    </div>
  );
};
