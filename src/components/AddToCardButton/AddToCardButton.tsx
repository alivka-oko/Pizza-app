import type { AppDispatch, RootState } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './addToCardButton.module.css';
import cn from 'classnames';
import type { MouseEvent } from 'react';

export const AddToCardButton = ({
  id,
  label,
  className
}: {
  id: number;
  label?: string;
  className?: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const increment = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(id));
  };
  const decrement = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.remove(id));
  };
  const cart = useSelector((s: RootState) => s.cart.items);
  const isExist = cart.find((i) => i.id === id);

  const defaultView = () => {
    return (
      <button
        className={cn(styles['add-to-cart'], className, {
          [styles['with-text']]: label
        })}
        onClick={increment}
      >
        <img src='/add-to-cart.svg' alt='' />
        {label}
      </button>
    );
  };

  const counterView = () => {
    return (
      <div className={cn(styles['counter'], className)}>
        <button onClick={decrement} className={styles['counter-button']}>
          <img src='/minus.svg' alt='Добавить в корзину' />
        </button>
        <p className='value'>{isExist?.count}</p>
        <button onClick={increment} className={styles['counter-button']}>
          <img src='/plus.svg' alt='Убрать из корзины' />
        </button>
      </div>
    );
  };

  const view = () => {
    if (isExist) {
      return counterView();
    }
    return defaultView();
  };

  return view();
};

export default AddToCardButton;
