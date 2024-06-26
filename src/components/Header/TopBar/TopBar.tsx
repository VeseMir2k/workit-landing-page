import Button from '../../Button';
import Logo from '../../Logo';
import styles from './TopBar.module.css';

const TopBar = () => {
  const { 'top-bar': topBarClass } = styles;

  return (
    <div className={topBarClass}>
      <Logo variant="light" href="#" alt="logo light" />
      <Button variant="underline" href="#" text="Apply for access" />
    </div>
  );
};

export default TopBar;
