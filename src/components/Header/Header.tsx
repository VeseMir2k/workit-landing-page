import imageHero from '../../assets/image-hero.webp';
import styles from './Header.module.css';
import Heading from './Heading';
import TopBar from './TopBar';

const Header = () => (
  <header className={styles.header}>
    <TopBar />
    <Heading />
    <img className={styles.imageHero} src={imageHero} alt="" />
  </header>
);

export default Header;
