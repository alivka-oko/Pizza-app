import { Link } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import styles from './Product.module.css';
import AddToCardButton from '../AddToCardButton/addToCardButton';

export const ProductPage = ({ product }: { product: Product }) => {
  return (
    <>
      <header>
        <Link to={'/'} className={styles['back']}>
          назад
        </Link>
        <h1>{product.name}</h1>
        <AddToCardButton id={product.id} label='В корзину'></AddToCardButton>
      </header>
    </>
  );
};
