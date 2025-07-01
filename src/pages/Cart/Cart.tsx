import { useSelector } from 'react-redux';
import Title from '../../components/Headling/Headling';
import type { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import type Product from '../Product/Product';
import axios from 'axios';
import { PREFIX } from '../../helpers/api';
import CartItem from '../../components/CartItem/CartItem';
import styles from './cart.module.css';

export function Cart() {
  const items = useSelector((s: RootState) => s.cart.items);
  const [cartProducts, setCardProducts] = useState<Product[]>([]);
  const getItem = async (id: number) => {
    const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCardProducts(res);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
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
    </>
  );
}
