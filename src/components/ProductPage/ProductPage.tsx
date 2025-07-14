import type { Product } from '../../interfaces/product.interface';
import styles from './Product.module.css';
import { useNavigate } from 'react-router-dom';
import productStyles from '../ProductCard/ProductCard.module.css';
import cn from 'classnames';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export const ProductPage = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <header className={styles['top']}>
        <button
          className={styles['back']}
          onClick={() => {
            navigate('/');
          }}
        ></button>
        <h1>{product.name}</h1>
        <AddToCartButton
          id={product.id}
          label='В корзину'
          className={styles['add']}
        ></AddToCartButton>
      </header>
      <div className={styles['content']}>
        <img
          src={product.image}
          className={styles['image']}
          alt={product.name}
        />
        <div className={styles['info']}>
          <div className={styles['params']}>
            <p className={styles['line']}>
              Цена
              <span className={styles['price']}>{product.price}</span>
            </p>
            <p className={styles['line']}>
              Рейтинг
              <span className={cn(productStyles['rating'], styles['block'])}>
                {product.rating}
              </span>
            </p>
          </div>
          <div className={styles['list']}>
            <p className={styles['list-title']}>Состав:</p>
            <ul className={styles['ingredients']}>
              {product.ingredients.map((i, index) => (
                <li className={styles['ingredient']} key={index}>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
