import {
  ChangeEvent,
  memo,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type DefaultInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends DefaultInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type,
    placeholder,
    isAutoFocus,
    readOnly,
    ...otherProps
  }: InputProps) => {
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

    const isCarretVisible = isFocused && !readOnly;

    useEffect(() => {
      if (isAutoFocus) {
        setIsFocused(true);
        inputRef.current?.focus();
      }
    }, [isAutoFocus]);

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e: any) => {
      setCaretPosition(e.target.selectionStart);
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    return (
      <div
        className={classNames(cls.InputWrapper, [className], {
          [cls.readOnly]: readOnly,
        })}
      >
        {placeholder ? (
          <p className={cls.placeholder}>{`${placeholder}>`}</p>
        ) : (
          <p className={cls.placeholder}>{t('Insert')}</p>
        )}
        <section className={cls.caretWrapper}>
          <input
            ref={inputRef}
            className={cls.input}
            value={value}
            onChange={changeHandler}
            type={type}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            readOnly={readOnly}
            {...otherProps}
          />
          {isCarretVisible && (
            <span style={{ left: caretPosition * 8.9 }} className={cls.caret} />
          )}
        </section>
      </div>
    );
  },
);
