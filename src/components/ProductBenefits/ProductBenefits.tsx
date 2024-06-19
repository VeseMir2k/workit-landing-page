import ProductBenefit from './ProductBenefit/ProductBenefit';
import styles from './ProductBenefits.module.css';

type Benefit = {
  title: string;
  description: string;
};

const benefitsData: Benefit[] = [
  {
    title: 'Actionable insights',
    description:
      'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
  },
  {
    title: 'Data-driven decisions',
    description:
      'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
  },
  {
    title: 'Always affordable',
    description:
      'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
  },
];

const ProductBenefits = () => {
  const benefitsList = benefitsData.map((benefit, index) => (
    <ProductBenefit key={index} id={index} title={benefit.title} description={benefit.description} />
  ));

  const { 'product-benefits': productBenefitsClass } = styles;

  return <div className={productBenefitsClass}>{benefitsList}</div>;
};

export default ProductBenefits;
