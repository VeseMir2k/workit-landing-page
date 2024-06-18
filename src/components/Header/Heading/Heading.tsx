import Button from '../../Button';
import styles from './Heading.module.css';

const Heading = () => (
  <div className={styles.heading}>
    <h1 className={styles.title}>
      Data <span className={styles.textUnderline}>tailored</span> to your needs.
    </h1>
    <Button variant="full" />
  </div>
);

export default Heading;
