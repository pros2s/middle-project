import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SVGIcon } from '../SVGIcon/SVGIcon';
import StarIcon from '@/shared/assets/icons/star.svg';

import cls from './StarRaiting.module.scss';
import { Flex } from '../Stack/Flex';

interface StarRaitingProps {
  className?: string;
  onSelect?: (startsCoun: number) => void;
  size?: number;
  selectedStars?: number;
}

const starNums = [1, 2, 3, 4, 5];

export const StarRaiting = memo(
  ({ className, onSelect, selectedStars = 0, size = 50 }: StarRaitingProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(
      Boolean(selectedStars),
    );
    const [currentStar, setCurrentStar] = useState<number>(selectedStars);

    const onHover = (starNumber: number) => () => {
      if (!isSelected) {
        setCurrentStar(starNumber);
      }
    };

    const onLeave = () => {
      if (!isSelected) {
        setCurrentStar(0);
      }
    };

    const onClick = (starNumber: number) => () => {
      if (!isSelected) {
        setIsSelected(true);
        setCurrentStar(starNumber);
        onSelect?.(starNumber);
      }
    };

    return (
      <Flex
        gap='8'
        className={classNames(cls.StarRaiting, [className], {
          [cls.selected]: isSelected,
        })}
      >
        {starNums.map((star) => (
          <SVGIcon
            className={classNames(cls.starIcon, [], {
              [cls.hovered]: currentStar >= star,
              [cls.selected]: isSelected,
            })}
            Svg={StarIcon}
            key={star}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(star)}
            onClick={onClick(star)}
            data-testid={`StarRaiting.${star}`}
            data-starselected={currentStar >= star}
          />
        ))}
      </Flex>
    );
  },
);
