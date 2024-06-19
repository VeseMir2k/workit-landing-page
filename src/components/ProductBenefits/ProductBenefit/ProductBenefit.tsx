import styles from './ProductBenefit.module.css';

const ProductBenefit = ({ id, title, description }: { id: number; title: string; description: string }) => {
  return (
    <div className={styles.productBenefit}>
      <div className={styles.id}>{id + 1}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProductBenefit;
