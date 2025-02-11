import { FC } from 'react';

import * as styles from './Message.module.scss';

interface Props {
  className?: string;
  description: string;
}

const Message: FC<Props> = ({ description }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.message}>{description}</span>;
    </div>
  );
};

export default Message;
