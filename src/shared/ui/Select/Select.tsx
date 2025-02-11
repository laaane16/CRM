import { FC, useState } from 'react';

import * as styles from './Select.module.scss';

interface IOption {
  value: string;
  label: string;
}

interface Props {
  defaultValue: string;
  className?: string;
  options: IOption[];
  onSelect?: () => void;
  onOpen?: () => void;
}

const Select: FC<Props> = ({ defaultValue, className, options, onSelect, onOpen }) => {
  const findDefaultValue = options.find((option) => option.label === defaultValue);

  const [selectedItem, setSelectedItem] = useState(findDefaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOpen = () => {
    setIsOpen((curState) => !curState);
    onOpen && onOpen();
  };

  const handleSelectItem = (value: IOption): void => {
    setSelectedItem(value);
    setIsOpen(false);
    onSelect && onSelect();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.select} onClick={handleSelectOpen}>
        {selectedItem?.label}
      </div>
      {isOpen ? (
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              className={styles.item}
              onClick={() => {
                handleSelectItem(option);
              }}
              key={option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
