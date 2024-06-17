/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../../assets/logo-light.svg';
import Button from '../../Button';
import styles from './TopBar.module.css';

const TopBar = () => (
  <div className={styles.TopBar}>
    <img src={logo} alt="logo" />
    <Button />
  </div>
);

export default TopBar;
