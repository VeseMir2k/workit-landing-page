import styles from './Button.module.css';

type Variant = 'full' | 'underline';

const Button = ({ variant, text }: { variant: Variant; text: string }) => {
  const variants = { full: styles.buttonFull, underline: styles.buttonUnderline };

  const selectedVariant = variants[variant] || '';

  return (
    <a className={`${styles.button} ${selectedVariant}`} href="#">
      {text}
    </a>
  );
};

export default Button;
