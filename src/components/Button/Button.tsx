import styles from './Button.module.css';

type Variant = 'full' | 'underline';

const Button = ({ variant }: { variant: Variant }) => {
  const variants = { full: styles.buttonFull, underline: styles.buttonUnderline };

  const selectedVariant = variants[variant] || '';

  return (
    <a className={selectedVariant} href="#">
      Apply for access
    </a>
  );
};

export default Button;
