import styles from './Header.module.css';
import Heading from './Heading';
import TopBar from './TopBar';

const Header = () => (
  <header className={styles.header}>
    <TopBar />
    <Heading />
  </header>
);

export default Header;
