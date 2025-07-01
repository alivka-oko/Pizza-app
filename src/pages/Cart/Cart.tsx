import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/Headling/Headling';
import { type AppDispatch, type RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import type Product from '../Product/Product';
import axios from 'axios';
import { PREFIX } from '../../helpers/api';
import CartItem from '../../components/CartItem/CartItem';
import styles from './cart.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';

const DELIVERY_FEE = 190;

export function Cart() {
  const items = useSelector((s: RootState) => s.cart.items);
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [cartProducts, setCardProducts] = useState<Product[]>([]);
  const getItem = async (id: number) => {
    const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
    return data;
  };

  const total = items
    .map((i) => {
      const product = cartProducts.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, item) => (acc += item), 0);

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCardProducts(res);
  };

  const checkout = async () => {
    await axios.post(
      `${PREFIX}/order`,
      {
        products: [...items]
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
    );
    dispatch(cartActions.clearCart());
    navigate('/success');
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <div className={styles['container']}>
      <Title>Корзина</Title>
      <div className={styles['cart']}>
        {items.map((i) => {
          const product = cartProducts.find((p) => p.id === i.id);
          if (!product) {
            return;
          }
          return <CartItem count={i.count} {...product} key={i.id}></CartItem>;
        })}
      </div>
      <div className={styles['order']}>
        <div className={styles['info']}>
          <div className={styles['line']}>
            <p className={styles['label']}>Итог</p>{' '}
            <span className={styles['price']}>{total}</span>
          </div>
          <div className={styles['line']}>
            <p className={styles['label']}>Доставка</p>
            <span className={styles['price']}>{DELIVERY_FEE}</span>
          </div>
          <div className={styles['line']}>
            <p className={styles['label']}>
              Итог{' '}
              <span className={styles['items-count']}>({items.length})</span>
            </p>
            <span className={styles['price']}>{total + DELIVERY_FEE}</span>
          </div>
        </div>
        <Button viewType='big' onClick={checkout}>
          Оформить
        </Button>
      </div>
    </div>
  );
}
