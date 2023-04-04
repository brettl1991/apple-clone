export type navItemType = {
  title: string;
  url?: string;
  imagePath?: string;
  submenu?: {
    title: string;
    submenu?: {
      title: string;
      url?: string;
    };
  };
};
