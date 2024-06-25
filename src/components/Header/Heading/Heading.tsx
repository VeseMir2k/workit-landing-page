import Button from '../../Button';
import styles from './Heading.module.css';

const Heading = () => {
  const { heading: headingClass, heading__title: titleClass, 'heading__text-underline': textUnderlineClass } = styles;

  return (
    <div className={headingClass}>
      <h1 className={titleClass}>
        Data <span className={textUnderlineClass}>tailored</span> to your needs.
      </h1>
      <Button variant="full" href="#" text="Learn more" />
    </div>
  );
};

export default Heading;
