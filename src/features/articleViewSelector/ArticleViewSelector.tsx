import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import ListIcon from 'shared/assets/icons/list-mode.svg';
import TiledIcon from 'shared/assets/icons/tiled-mode.svg';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { SVGIcon } from 'shared/ui/SVGIcon/SVGIcon';
import { ArticleView } from '../../entities/article/model/types/Article';

import cls from './ArticleViewSelector.module.scss';

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
      <div className={classNames(cls.ArticleViewSelector, [className])}>
        {viewIcons.map((item) => (
          <Button
            key={item.view}
            theme={ButtonThemes.CLEAR}
            onClick={onClick(item.view)}
            className={cls.button}
          >
            <SVGIcon
              className={classNames('', [], {
                [cls.notSelected]: item.view !== view,
              })}
              Svg={item.icon}
            />
          </Button>
        ))}
      </div>
    );
  },
);
