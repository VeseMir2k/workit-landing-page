import Logo from '../Logo';
import styles from './Footer.module.css';
import Socials from './Socials';

const Footer = () => {
  const { footer: footerClass } = styles;
  return (
    <footer className={footerClass}>
      <Logo variant="dark" href="#" alt="logo dark" />
      <Socials />
    </footer>
  );
};

export default Footer;
