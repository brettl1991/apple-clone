// export type CarouselType = {
//   imgPath: string;
//   buttonText: string;
//   genreTitle: string;
//   text: string;
// };

import { ReactNode } from "react";

export type BackgroundStyleType = {
  imgPath: string;
};

// export type CarouselInnerType = {
//   currentSlide: number;
// };

// export type CarouselControlType = {
//   // next: () => void;
//   // prev: () => void;
// };

export type CarouselType = {
  children: ReactNode;
  visibleItemsCount: number;
  isInfinite?: boolean;
  withIndicator?: boolean;
};
export type ContainerStyleType = {
  visibleItemsCount: number;
};

export type CarouselItemType = {
  imgPath: string;
  buttonText: string;
  genreTitle: string;
  text: string;
};
