import logoDark from '../../assets/logo-dark.svg';
import styles from './Footer.module.css';
import Socials from './Socials';

const Footer = () => {
  const { footer: footerClass } = styles;
  return (
    <footer className={footerClass}>
      <img src={logoDark} alt="logo" />
      <Socials />
    </footer>
  );
};

export default Footer;
