import {
  memo,
  ImgHTMLAttributes,
  useState,
  useLayoutEffect,
  ReactElement,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo(
  ({
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';
      img.alt = alt;
      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setIsError(true);
      };
    }, [alt, src]);

    if (isLoading && fallback) return fallback;

    if (isError && errorFallback) return errorFallback;

    return <img className={className} alt={alt} src={src} {...otherProps} />;
  },
);
