import imageHero from '../../assets/image-hero.webp';
import styles from './Header.module.css';
import Heading from './Heading';
import TopBar from './TopBar';

const Header = () => {
  const { header: headerClass, 'header__image-hero': imageHeroClass } = styles;

  return (
    <header className={headerClass}>
      <TopBar />
      <Heading />
      <img className={imageHeroClass} src={imageHero} alt="" />
    </header>
  );
};

export default Header;
