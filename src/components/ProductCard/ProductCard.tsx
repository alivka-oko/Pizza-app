import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCardProps';
import AddToCardButton from '../AddToCardButton/addToCardButton';

export function ProductCard(props: ProductCardProps) {
  return (
    <Link to={`/product/${props.id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div
          className={styles['head']}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <p className={styles['price']}>
            {props.price} <span className={styles['currency']}>₽</span>
          </p>
          <AddToCardButton id={props.id}></AddToCardButton>
          <p className={styles['rating']}>{props.rating}</p>
        </div>
        <div className={styles['footer']}>
          <h2 className={styles['title']}>{props.name}</h2>
          <p className={styles['description']}>
            {props.ingredients.join(', ')}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
