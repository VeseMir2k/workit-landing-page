import styles from './Button.module.css';

type ButtonProps = {
  variant: 'full' | 'underline';
  text: string;
};

const Button = ({ variant, text }: ButtonProps) => {
  const { button: buttonClass, 'button--full': buttonFullClass, 'button--underline': buttonUnderlineClass } = styles;

  const variants = { full: buttonFullClass, underline: buttonUnderlineClass };

  const selectedVariant = variants[variant] || '';

  return (
    <a className={`${buttonClass} ${selectedVariant}`} href="#">
      {text}
    </a>
  );
};

export default Button;
