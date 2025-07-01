import type { CartItemProps } from './CartItemProps';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export function ProductCard(props: CartItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const increment = () => {
    dispatch(cartActions.add(props.id));
  };
  const decrement = () => {
    dispatch(cartActions.remove(props.id));
  };
  const deleteItem = () => {
    dispatch(cartActions.delete(props.id));
  };
  return (
    <div className={styles['card']}>
      <img className={styles['image']} src={props.image} alt='' />
      <div className={styles['description']}>
        <h2 className={styles['name']}>{props.name}</h2>
        <p className={styles['price']}>
          {props.price} <span className={styles['currency']}>₽</span>
        </p>
      </div>
      <div className={styles['counter']}>
        <button
          className={`${styles['remove-from-cart']} ${styles['counter-button']}`}
          onClick={decrement}
        >
          <img
            src='/minus.svg'
            className={styles['counter-image']}
            alt='Удалить из корзины'
          />
        </button>
        <p className={styles['count']}>{props.count}</p>
        <button
          className={`${styles['add-to-cart']} ${styles['counter-button']}`}
          onClick={increment}
        >
          <img
            src='/plus.svg'
            className={styles['counter-image']}
            alt='Добавить в корзину'
          />
        </button>
      </div>
      <button className={styles['remove']} onClick={deleteItem}>
        <img src='/remove.svg' alt='Удалить все' />
      </button>
    </div>
  );
}

export default ProductCard;
