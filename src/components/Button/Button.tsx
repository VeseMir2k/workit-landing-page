import styles from './Button.module.css';

type ButtonProps = {
  variant: 'full' | 'underline';
  href: string;
  text: string;
};

const Button = ({ variant, href, text }: ButtonProps) => {
  const { button: buttonClass, 'button--full': buttonFullClass, 'button--underline': buttonUnderlineClass } = styles;

  const variants = { full: buttonFullClass, underline: buttonUnderlineClass };

  const selectedVariant = variants[variant] || '';

  return (
    <a className={`${buttonClass} ${selectedVariant}`} href={href}>
      {text}
    </a>
  );
};

export default Button;
