import styles from './Header.module.css';
import TopBar from './TopBar';

const Header = () => (
  <header className={styles.header}>
    <TopBar />
  </header>
);

export default Header;
