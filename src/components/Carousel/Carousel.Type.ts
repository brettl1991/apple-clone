export type CarouselType = {
  imgPath: string;
  buttonText: string;
  genreTitle: string;
  text: string;
};

export type BackgroundStyleType = {
  imgPath: string;
};

export type CarouselInnerType = {
  currentSlide: number;
};

export type CarouselControlType = {
  next: () => void;
  prev: () => void;
};
