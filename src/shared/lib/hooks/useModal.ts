import { useEffect, useState } from 'react';

interface UseModalProps {
  isOpen: boolean;
  delay?: number;
  onClose: () => void;
}

export const useModal = ({ isOpen, delay = 300, onClose }: UseModalProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, delay);
  };

  return { visible, handleClose };
};
