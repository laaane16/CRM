import { FC } from 'react';

import { Button, Tooltip } from '../../../shared/ui';

import * as styles from './Header.module.scss';
import { Sizes, Theme } from '../../../shared/ui/Button/Button';

interface Props {
  className?: string;
}

const Header: FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Люди</h1>
      <Button size={Sizes.SMALL}>Добавить</Button>
      <Button size={Sizes.SMALL}>Запросить сотрудника</Button>
      <span
        style={{ border: '1px solid black', borderRadius: '50%', width: '15px', height: '15px', display: 'block' }}
      ></span>
      <Tooltip title="prompt text">
        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>asd</div>
      </Tooltip>
      <span
        style={{ border: '1px solid black', borderRadius: '50%', width: '15px', height: '15px', display: 'block' }}
      ></span>
    </header>
  );
};

export default Header;
