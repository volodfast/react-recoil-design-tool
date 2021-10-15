import { useRef, useEffect } from 'react';
// interfaces
import { ImageInfo } from './interfaces';

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
  const random = Math.round(Math.random() * 1000);

  return {
    src: `https://picsum.photos/seed/${random}/400/250`,
    seed: random,
  };
}

export async function getImageInfo(seed: number) {
  const imageUrlResponse = await fetch(
    `https://picsum.photos/seed/${seed}/400/250`
  );

  const url = imageUrlResponse.url;

  const id = url.split('id/')[1].split('/')[0];

  const response = await fetch(`https://picsum.photos/id/${id}/info`);

  const data: ImageInfo = await response.json();

  return data;
}

export const capitalizeFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

type ImageDimensions = {
  width: number;
  height: number;
};

export const getImageDimensions = (src: string): Promise<ImageDimensions> => {
  return new Promise<ImageDimensions>((res, rej) => {
    const image = new Image();

    image.onload = () => {
      res({
        width: image.width,
        height: image.height,
      });
    };

    image.onerror = (err) => {
      rej(err);
    };

    image.src = src;
  });
};
