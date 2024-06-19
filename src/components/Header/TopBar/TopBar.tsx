import logo from '../../../assets/logo-light.svg';
import Button from '../../Button';
import styles from './TopBar.module.css';

const TopBar = () => {
  const { 'top-bar': topBarClass } = styles;

  return (
    <div className={topBarClass}>
      <img src={logo} alt="logo" />
      <Button variant="underline" text="Apply for access" />
    </div>
  );
};

export default TopBar;
