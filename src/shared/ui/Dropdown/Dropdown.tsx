import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import * as styles from './Dropdown.module.scss';

interface Item {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  children: ReactNode;
  onOpen?: () => void;
  onClick?: (value: Item) => void;
  menu: Item[];
}

const Dropdown: FC<Props> = ({ children, className, onOpen, onClick, menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapClasses = cn(styles.wrap, className);

  const handleSelectOpen = () => {
    setIsOpen((curState) => !curState);
    onOpen && onOpen();
  };

  const handleClick = (value: Item) => {
    onClick && onClick(value);
  };

  return (
    <div onClick={handleSelectOpen} className={wrapClasses}>
      {children}
      {isOpen ? (
        <ul className={styles.list}>
          {menu.map((item) => (
            <li
              className={styles.item}
              onClick={() => {
                handleClick(item);
              }}
              key={item.value}
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
