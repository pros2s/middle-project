import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import ListIcon from '@/shared/assets/icons/list-mode.svg';
import TiledIcon from '@/shared/assets/icons/tiled-mode.svg';
import { Button, ButtonThemes } from '@/shared/ui/Button';
import { SVGIcon } from '@/shared/ui/SVGIcon';
import { Flex } from '@/shared/ui/Stack';

import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/article';

const viewIcons = [
  {
    view: ArticleView.SMALL,
    icon: ListIcon,
  },
  {
    view: ArticleView.BIG,
    icon: TiledIcon,
  },
];

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onChangeView: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo(
  ({ className, view, onChangeView }: ArticleViewSelectorProps) => {
    const onClick = (viewMode: ArticleView) => () => {
      onChangeView(viewMode);
    };

    return (
      <Flex
        justify='end'
        align='center'
        className={classNames('', [className])}
      >
        {viewIcons.map((item) => (
          <Button
            key={item.view}
            theme={ButtonThemes.CLEAR}
            onClick={onClick(item.view)}
            className={cls.button}
            data-testid={
              item.view === ArticleView.SMALL
                ? 'ArticleViewSelector.small'
                : 'ArticleViewSelector.big'
            }
          >
            <SVGIcon
              className={classNames('', [], {
                [cls.notSelected]: item.view !== view,
              })}
              Svg={item.icon}
              size={20}
            />
          </Button>
        ))}
      </Flex>
    );
  },
);
