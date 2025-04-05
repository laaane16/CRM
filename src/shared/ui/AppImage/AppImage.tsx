import { FC, ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallbackLoading?: ReactElement;
  fallbackError?: ReactElement;
}

const AppImage: FC<Props> = ({ src, alt = 'image', fallbackLoading, fallbackError, ...otherProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, []);

  if (isLoading && fallbackLoading) {
    return fallbackLoading;
  }

  if (hasError && fallbackError) {
    return fallbackError;
  }

  return <img src={src} alt={alt} {...otherProps} />;
};

export default memo(AppImage);
