import { FC, useState } from 'react';
import cn from 'classnames';

import * as styles from './Accordeon.module.scss';
import { AnimatePresence, motion } from 'motion/react';

interface Item {
  Component: FC;
}

interface Props {
  className?: string;
  title?: string;
  items: Item[];
}

const Accordeon: FC<Props> = ({ className, title, items }) => {
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
              {items.map((item, index) => (
                <li className={styles.item} key={index}>
                  <item.Component />
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
