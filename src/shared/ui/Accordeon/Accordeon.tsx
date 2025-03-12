import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import * as styles from './Accordeon.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { IFilter } from '../../../pages/PeoplePage/model/types/PeoplesSchema';

interface Item extends IFilter {
  item: ReactNode;
}

interface Props {
  className?: string;
  title?: string;
  items: Item[];
  selectedItems: IFilter[];
  onSelect: (filter: IFilter) => void;
}

const Accordeon: FC<Props> = ({ className, title, onSelect, items, selectedItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowClasses = cn(styles.arrowIcon, 'icon-top', {
    [styles.isOpen]: isOpen,
  });

  const wrapClasses = cn(styles.wrap, className);
  return (
    <div className={wrapClasses}>
      <div className={styles.titleWrap} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${styles.title} secondary medium`}>{title}</span>
        <span className={arrowClasses} />
      </div>

      <div style={{ overflow: 'hidden' }}>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={styles.items}
            >
              {items.map((i, index) => (
                <li
                  onClick={() => onSelect({ value: i.value, field: i.field })}
                  className={cn(styles.item, {
                    [styles.selected]: selectedItems.findIndex((item) => item.value === i.value) !== -1,
                  })}
                  key={i.value}
                >
                  {i.item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordeon;
