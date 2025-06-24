import InputSearch from '../../components/InputSearch/InputSearch';
import Headling from '../../components/Headling/Headling';
import styles from './Menu.module.css';
import ProductList from '../../components/ProductList/ProductList';
import { PREFIX } from '../../helpers/api';
import type { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const getMenu = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['header']}>
        <Headling>Меню</Headling>
        <InputSearch></InputSearch>
      </div>
      {error && <>{error}</>}
      {!isLoading && <ProductList products={products} />}
      {isLoading && <>Загружаем продукты...</>}
    </>
  );
}

export default Menu;
