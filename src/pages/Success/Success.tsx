import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

export function Success() {
  return (
    <div className={styles['order']}>
      <img className={styles['image']} src='/pizzaFinish.png' alt='Пицца' />
      <p className={styles['title']}>Ваш заказ успешно оформлен!</p>
      <Link to='/' className={styles['home-button-link']}>
        <Button viewType='big'>
          Сделать новый
        </Button>
      </Link>
    </div>
  );
}

export default Success;
