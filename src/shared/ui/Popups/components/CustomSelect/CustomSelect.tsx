import { Fragment, memo, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex } from '../../../Stack/Flex';
import { Text } from '../../../Text/Text';
import { Button, ButtonThemes } from '../../../Button/Button';
import cls from './CustomSelect.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface Item {
  content: ReactNode;
  value: string;
  disabled?: boolean;
}

interface CustomSelectProps {
  items: Item[];
  onChange: (value: string) => void;
  value?: string;
  defaultValue?: string;
  className?: string;
  label?: string;
  readonly?: boolean;
}

export const CustomSelect = memo(
  ({
    className,
    defaultValue,
    items,
    onChange,
    value,
    label,
    readonly,
  }: CustomSelectProps) => (
    <Flex align='center'>
      {label && <Text text={`${label}>`} />}
      <Listbox
        as='div'
        className={classNames(popupCls.popup, [className], {
          [popupCls.disabled]: readonly,
        })}
        disabled={readonly}
        value={value}
        onChange={onChange}
      >
        <Listbox.Button as='div'>
          <Button
            disabled={readonly}
            theme={ButtonThemes.CLEAR}
            className={cls.button}
          >
            {value ?? defaultValue}
          </Button>
        </Listbox.Button>
        <Listbox.Options as='ul' className={popupCls.list}>
          {items.map((item) => (
            <Listbox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, [], {
                    [popupCls.active]: active,
                    [cls.selected]: selected,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </Flex>
  ),
);
