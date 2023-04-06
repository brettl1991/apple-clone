import { Dispatch, SetStateAction } from "react";

export type navItemType = {
  setMouseHover: Dispatch<SetStateAction<boolean>>;
  title: string;
  url?: string;
  imagePath?: string;
  submenu?: {
    title: string;
    submenu: {
      title: string;
      url: string;
    }[];
  }[];
};

export type submenuType = {
  submenu: {
    title: string;
    submenu: {
      title: string;
      url: string;
    }[];
  }[];
};

export type navContainerType = {
  mouseHover: boolean;
};
