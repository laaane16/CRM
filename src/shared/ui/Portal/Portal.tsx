import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  element: Element;
}

const Portal: FC<Props> = ({ children, element }) => {
  return createPortal(children, element);
};

export default Portal;
