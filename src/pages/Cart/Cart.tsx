import { useSelector } from 'react-redux';
import Title from '../../components/Headling/Headling';
import type { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import type Product from '../Product/Product';
import axios from 'axios';
import { PREFIX } from '../../helpers/api';
import CartItem from '../../components/CartItem/CartItem';
import styles from './cart.module.css';
import Button from '../../components/Button/Button';

const DELIVERY_FEE = 190;

export function Cart() {
  const items = useSelector((s: RootState) => s.cart.items);
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
        <Button viewType='big'>Оформить</Button>
      </div>
    </div>
  );
}
