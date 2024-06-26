import FacebookIcon from '../../../../assets/icon-facebook.svg';
import InstagramIcon from '../../../../assets/icon-instagram.svg';
import TwitterIcon from '../../../../assets/icon-twitter.svg';
import styles from './Social.module.css';

type SocialProps = {
  href: string;
  icon: 'facebook' | 'twitter' | 'instagram';
  alt: string;
};

const Social = ({ href, icon, alt }: SocialProps) => {
  const { social: socialClass } = styles;

  const renderIcon = () => {
    switch (icon) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'twitter':
        return <TwitterIcon />;
    }
  };

  return (
    <a className={socialClass} href={href} aria-label={alt}>
      {renderIcon()}
    </a>
  );
};

export default Social;
