import { FC, ReactNode, useEffect, useState, memo } from 'react';
import cn from 'classnames';

import Portal from '../Portal/Portal';

import * as styles from './Modal.module.scss';
import { useModal } from '../../lib/hooks/useModal';

interface Props {
  className?: string;
  isOpen: boolean;
  content: ReactNode;
  onClose: () => void;
  delay?: number;
}

const Modal: FC<Props> = ({ isOpen, content, delay, onClose, className }) => {
  const { visible, handleClose } = useModal({ isOpen, delay, onClose });

  if (!isOpen) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={cn(styles.overlay, { [styles.visible]: visible })} onClick={handleClose}></div>
      <div className={cn(styles.modal, className, { [styles.visible]: visible })}>{content}</div>
    </Portal>
  );
};

export default memo(Modal);
