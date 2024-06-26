import Social from './Social';
import styles from './Socials.module.css';

const Socials = () => {
  const { socials: socialsClass } = styles;

  return (
    <div className={socialsClass}>
      <Social href="#" icon="facebook" alt="icon facebook" />
      <Social href="#" icon="twitter" alt="icon twitter" />
      <Social href="#" icon="instagram" alt="icon instagram" />
    </div>
  );
};

export default Socials;
