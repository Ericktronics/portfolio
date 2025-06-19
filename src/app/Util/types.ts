export interface TechConfig {
  url: string;
  alt: string;
  width: number;
  height: number;
  yoe: string;
  name: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  items: Array<string | SubItem>;
}

export interface SubItem {
  text: string;
  subItems: string[];
}
