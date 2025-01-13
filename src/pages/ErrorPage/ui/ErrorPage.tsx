import { FC } from 'react';

interface Props {
  className?: string;
}

const ErrorPage: FC<Props> = () => {
  return (
    <div>
      <h1>Error</h1>
      <button
        onClick={() => {
          location.reload();
        }}
        type="button"
      >
        Перезагрузить страницу
      </button>
    </div>
  );
};

export default ErrorPage;
