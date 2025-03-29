import { FC, useState, memo } from 'react';
import cn from 'classnames';

import StarIcon from '../../assets/icons/star.svg';

import * as styles from './Stars.module.scss';

interface Props {
  className?: string;
  count?: number;
  selectedStar?: number;
  onSelect?: (idx: number) => void;
}

const Stars: FC<Props> = ({ count = 1, selectedStar: selectedStarProps = -1, className, onSelect }) => {
  // -1 means no stars hovered
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(selectedStarProps);

  const onMouseLeave = () => {
    setHoveredStar(-1);
  };

  const onClick = (idx: number) => () => {
    if (selectedStar === idx) {
      setSelectedStar(-1);
      onSelect && onSelect(-1);
    } else {
      setSelectedStar(idx);
      onSelect && onSelect(idx);
    }
  };

  const onMouseEnter = (idx: number) => () => {
    setHoveredStar(idx);
  };

  return (
    <ul className={cn(styles.stars, className)}>
      {new Array(count).fill(1).map((_, idx) => (
        <li
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter(idx)}
          onClick={onClick(idx)}
          className={styles.star}
          key={idx}
        >
          <StarIcon
            className={cn(styles.icon, {
              [styles.isHovered]: idx <= hoveredStar,
              [styles.isSelected]: idx <= selectedStar,
            })}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(Stars);
