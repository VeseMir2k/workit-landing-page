import iconFacebook from '../../../assets/icon-facebook.svg';
import iconInstagram from '../../../assets/icon-instagram.svg';
import iconTwitter from '../../../assets/icon-twitter.svg';
import Social from './Social/Social';
import styles from './Socials.module.css';

const Socials = () => {
  const { socials: socialsClass } = styles;

  return (
    <div className={socialsClass}>
      <Social href="#" icon={iconFacebook} alt="icon facebook" />
      <Social href="#" icon={iconTwitter} alt="icon twitter" />
      <Social href="#" icon={iconInstagram} alt="icon instagram" />
    </div>
  );
};

export default Socials;
