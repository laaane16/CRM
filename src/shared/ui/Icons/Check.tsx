import { FC } from 'react';

interface Props {
  className?: string;
}

const Check: FC<Props> = ({ className }) => {
  return (
    <svg className={className} width="10" height="7" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.21975 0.469811L3.5 5.18956L1.78025 3.46981C1.48597 3.18558 1.01819 3.18965 0.728886 3.47895C0.439586 3.76825 0.435521 4.23603 0.71975 4.53031L2.96975 6.78031C3.26263 7.0731 3.73738 7.0731 4.03025 6.78031L9.28025 1.53031C9.56448 1.23603 9.56041 0.768248 9.27111 0.478947C8.98181 0.189647 8.51403 0.185582 8.21975 0.469811Z"
      />
    </svg>
  );
};

export default Check;
