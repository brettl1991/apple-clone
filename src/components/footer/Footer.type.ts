export type FooterType = {
  title?: string;
  colum?: {
    title: string;
    submenu?: {
      title: string;
      url: string;
    }[];
  }[];
};
