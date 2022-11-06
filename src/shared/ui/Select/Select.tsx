import { ChangeEvent, memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo(
  ({ className, label, options, readOnly, onChange, value }: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionList = useMemo(
      () =>
        options?.map((option) => (
          <option
            className={cls.option}
            value={option.value}
            key={option.value}
          >
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
  },
);
