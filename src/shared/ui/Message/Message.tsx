import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as styles from './Message.module.scss';

interface Props {
  description: string;
}

const Message: FC<Props> = ({ description }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className={styles.wrap}>
          <motion.span
            initial={{ x: '-50%', y: 0 }}
            animate={{ y: 100 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.message}
          >
            {description}
          </motion.span>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Message;
