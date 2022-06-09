import Image from 'next/image'

import styles from './ProductDetails.module.scss';
import { currencyFormat } from '../../utils/numericFormatters'

const ProductDetails = ({ children, product }) => {
  const strikethroughClass = product.discount > 0 ? styles.strikethrough : '';

  const discountPrice =
    product.discount === 0 ? null : (
      <div className={styles.discount}>
        {' '}
        {currencyFormat(product.price * (1 - product.discount))}
      </div>
    );

  return (
    <div className={styles.product}>
      <div className={styles.productDetails}>
        <Image
          src={(`/images/robot-images/${product.imageName}`)}
          width={125}
          height={125}
          alt={product.name}
        />
        <div className={styles.productInfo}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.category}>Category: {product.category}</div>
        </div>
      </div>
      <div className={styles.price}>
        <div className={strikethroughClass}>
          {currencyFormat(product.price)}
        </div>
        {discountPrice}
        {children}
      </div>
    </div>
  );
};

export default ProductDetails;
