import DarkLogo from '../../assets/logo-dark.svg';
import LightLogo from '../../assets/logo-light.svg';

type LogoProps = {
  variant: 'dark' | 'light';
  href: string;
  alt: string;
};

const Logo = ({ variant, href, alt }: LogoProps) => {
  const renderLogo = () => {
    switch (variant) {
      case 'dark':
        return <DarkLogo />;
      case 'light':
        return <LightLogo />;
      default:
        return null;
    }
  };

  return (
    <a href={href} aria-label={alt}>
      {renderLogo()}
    </a>
  );
};

export default Logo;
