import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button } from '../Button/Button';

import cls from './Code.module.scss';
import { SVGIcon } from '@/shared/ui/SVGIcon/SVGIcon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, [className])}>
      <Button className={cls.copyBtn} onClick={onCopy}>
        <SVGIcon Svg={CopyIcon} size={20} />
      </Button>
      {text}
    </pre>
  );
});
