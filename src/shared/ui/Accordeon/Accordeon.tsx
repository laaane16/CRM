import { FC, useState } from 'react';
import cn from 'classnames';

import * as styles from './Accordeon.module.scss';

interface Item {
  title: string;
}

interface Props {
  className?: string;
  title?: string;
  items: Item[];
}

const Accordeon: FC<Props> = ({ className, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapClasses = cn(styles.wrap, className);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={wrapClasses}>
      <span className={styles.title}>{title}</span>
      <span className={`${styles.arrowIcon} icon-top ${isOpen && 'isOpen'}`} />
      <span className={`${styles.moveIcon} icon-move`} />
      {isOpen && (
        <ul className={styles.items}>
          {items.map((item) => (
            <li className={styles.item} key={item.title}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordeon;
