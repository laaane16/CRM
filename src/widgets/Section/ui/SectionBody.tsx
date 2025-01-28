import { FC } from 'react';

import * as styles from './SectionBody.module.scss';

interface Props {
  className?: string;
}

const data = [
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
  { title: '213123213' },
];

const SectionBody: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sort}></div>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li className={styles.item} key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionBody;
