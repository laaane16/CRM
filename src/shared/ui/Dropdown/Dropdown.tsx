import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import * as styles from './Dropdown.module.scss';

interface Item {
  value: string;
  label: string;
  'data-testid'?: string;
}

interface Props {
  className?: string;
  children: ReactNode;
  onOpen?: () => void;
  onClick?: (value: Item) => void;
  menu: Item[];
  ['data-testid']?: string;
}

const Dropdown: FC<Props> = ({ children, className, onOpen, onClick, menu, 'data-testid': dataTestId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapClasses = cn(styles.wrap, className);

  const handleSelectOpen = () => {
    console.log('12312312321321');
    setIsOpen((curState) => !curState);
    onOpen && onOpen();
  };

  const handleClick = (value: Item) => {
    onClick && onClick(value);
  };

  return (
    <div onClick={handleSelectOpen} data-testid={dataTestId} className={wrapClasses}>
      {children || <div>place for you child</div>}
      {isOpen ? (
        <ul className={styles.list}>
          {menu.map((item) => (
            <li
              data-testid={item['data-testid']}
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
