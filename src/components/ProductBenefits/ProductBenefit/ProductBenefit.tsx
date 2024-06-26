import styles from './ProductBenefit.module.css';

type ProductBenefitProps = {
  id: number;
  title: string;
  description: string;
};

const ProductBenefit = ({ id, title, description }: ProductBenefitProps) => {
  const {
    'product-benefit': productBenefitClass,
    'product-benefit__id': idClass,
    'product-benefit__title': titleClass,
    'product-benefit__description': descriptionClass,
  } = styles;

  return (
    <div className={productBenefitClass}>
      <div className={idClass}>{id + 1}</div>
      <div>
        <h3 className={titleClass}>{title}</h3>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default ProductBenefit;
