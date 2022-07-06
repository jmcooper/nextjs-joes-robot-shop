import Image from 'next/image'

import styles from './CartItem.module.scss';
import { currencyFormat } from '../../../utils/numericFormatters'

const CartItem = ({ children, product }) => {
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
        <div className={styles.productName}>{product.name}</div>
      </div>
      <div className={styles.price}>
        <div className={strikethroughClass}>
          {currencyFormat(product.price)}
        </div>
        {discountPrice}
        {children}
      </div>
    </div >
  );
};

export default CartItem;
