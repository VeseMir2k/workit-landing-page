import logoDark from '../../assets/logo-dark.svg';
import styles from './Footer.module.css';

const Footer = () => {
  const { footer: footerClass } = styles;
  return (
    <footer className={footerClass}>
      <img src={logoDark} alt="logo" />
    </footer>
  );
};

export default Footer;
