import logo from '../../assets/logo-light.svg';
import styles from './TopBar.module.css';

const TopBar = () => (
  <div className={styles.TopBar}>
    <img src={logo} alt="logo" />
  </div>
);

export default TopBar;
