import { useRef, useEffect } from 'react';

export function useDebounce<TArgs extends unknown[]>(
  set: (...args: TArgs) => void,
  duration: number
) {
  const mouseDownTimeout = useRef<any>();

  useEffect(() => {
    const timeout = mouseDownTimeout.current;

    return () => clearTimeout(timeout);
  }, []);

  return (...args: TArgs) => {
    clearTimeout(mouseDownTimeout.current);
    mouseDownTimeout.current = setTimeout(() => set(...args), duration);
  };
}

export function getRandomImageUrl() {
  return {
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif',
  };
}

export const capitalizeFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
