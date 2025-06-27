import InputSearch from '../../components/InputSearch/InputSearch';
import Headling from '../../components/Headling/Headling';
import styles from './Menu.module.css';
import ProductList from '../../components/ProductList/ProductList';
import { PREFIX } from '../../helpers/api';
import type { Product } from '../../interfaces/product.interface';
import { useEffect, useState, type ChangeEvent } from 'react';
import axios, { AxiosError } from 'axios';

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
        params: {
          name
        }
      });
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

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className={styles['header']}>
        <Headling>Меню</Headling>
        <InputSearch onChange={updateFilter}></InputSearch>
      </div>
      {error && <>{error}</>}
      {!isLoading && <ProductList products={products} />}
      {!products.length && <>Ничего не найдено :(</>}
      {isLoading && <>Загружаем продукты...</>}
    </>
  );
}

export default Menu;
