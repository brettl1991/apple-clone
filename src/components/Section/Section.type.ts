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
  titleColor?: string;
};

export type TitleImageType = {
  titleImgPath?: string;
};

export type ContentStyleType = {
  titleColor?: string;
};

export type CollectionSectionType = {
  id?: string;
  url?: string;
  titleColor?: string;
  title?: string;
  subTitle?: string;
  links?: string[];
  svgPath?: string;
  imgPath?: string;
  titleImgPath?: string;
  linkColor?: string;
};

export type TitleImgStyleType = {
  titleImgPath?: string;
};

export type LinkStyleType = {
  linkColor?: string;
};
