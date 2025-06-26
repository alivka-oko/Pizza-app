import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCardProps';
import type { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export function ProductCard(props: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
  };
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
          <button className={styles['add-to-cart']} onClick={add}>
            <img src='/add-to-cart.svg' alt='' />
          </button>
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
