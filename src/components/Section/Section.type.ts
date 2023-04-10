export type shopSectionType = {
  id?: string;
  title?: string;
  url?: string;
  svgPath?: string;
  urlTitle?: string;
};

export type HeroSectionType = {
  id?: string;
  url: string;
  titleColor?: string;
  title?: string;
  subTitle?: string;
  links?: string[];
  svgPath?: string;
  imgPath: string;
  titleImgPath?: string;
};

export type MainImageStyleType = {
  imgPath?: string;
};

export type TitleImageType = {
  titleImgPath?: string;
};

export type ContentStyleType = {
  titleColor?: string;
};
