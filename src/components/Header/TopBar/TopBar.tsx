import logoLight from '../../../assets/logo-light.svg';
import Button from '../../Button';
import styles from './TopBar.module.css';

const TopBar = () => {
  const { 'top-bar': topBarClass } = styles;

  return (
    <div className={topBarClass}>
      <img src={logoLight} alt="logo" />
      <Button variant="underline" href="#" text="Apply for access" />
    </div>
  );
};

export default TopBar;
