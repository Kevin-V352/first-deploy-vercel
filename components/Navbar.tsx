import ActiveLink from "./ActiveLink";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav>
      {
        menuItems.map(({ text, href }) => <ActiveLink key={text} text={text} path={href}/>)
      }
    </nav>
  );
};

export default Navbar;