import { FC, memo, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';

import Portal from '../Portal/Portal';

import * as styles from './Modal.module.scss';

interface Props {
  className?: string;
  isOpen: boolean;
  content: ReactNode;
  onClose: () => void;
}

const Modal: FC<Props> = ({ isOpen, content, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <Portal element={document.body}>
      <div className={cn(styles.overlay, { [styles.visible]: visible })} onClick={handleClose}></div>
      <div className={cn(styles.modal, { [styles.visible]: visible })}>{content}</div>
    </Portal>
  );
};

export default memo(Modal);
