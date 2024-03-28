type Link = {
  title: string;
  id: string;
};

type LinkProps = Link[];

export const links: LinkProps = [
  {
    title: 'Home',
    id: 'home',
  },
  {
    title: 'About us',
    id: 'about-us',
  },
  {
    title: 'Contact us',
    id: 'contact-us',
  },
  {
    title: 'Shop',
    id: 'shop',
  },
];
