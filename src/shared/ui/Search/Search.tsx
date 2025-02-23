import { Dispatch, FC, SetStateAction } from 'react';

import Input from '../Input/Input';

import * as styles from './Search.module.scss';
import cn from 'classnames';

interface Props {
  className?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Search: FC<Props> = ({ value, onChange, className }) => {
  const searchClasses = cn(styles.search, className);

  return <Input className={searchClasses} placeholder="Поиск" value={value} onChange={onChange} />;
};

export default Search;
