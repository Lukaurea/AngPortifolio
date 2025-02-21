export interface IProjects {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: string;
  height: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}
