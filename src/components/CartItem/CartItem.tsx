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
  const decrement = () => {};
  const remove = () => {};
  return (
    <div className={styles['card']}>
      <img src={props.image} alt='' />
      <div className={styles['description']}>
        <h2 className={styles['name']}>{props.name}</h2>
        <p className={styles['price']}>
          {props.price} <span className={styles['currency']}>₽</span>
        </p>
      </div>
      <div className={styles['counter']}>
        <button className={styles['add-to-cart']} onClick={decrement}>
          <img src='/add-to-cart.svg' alt='Удалить из корзины' />
        </button>
        <p className={styles['rating']}>{props.count}</p>
        <button className={styles['add-to-cart']} onClick={increment}>
          <img src='/add-to-cart.svg' alt='Добавить в корзину' />
        </button>
      </div>
      <button className={styles['remove']} onClick={remove}>
        <img src='/add-to-cart.svg' alt='Удалить все' />
      </button>
    </div>
  );
}

export default ProductCard;
