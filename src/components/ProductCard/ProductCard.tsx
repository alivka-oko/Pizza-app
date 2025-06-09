import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardsProps } from './ProductCardProps';

export function ProductCard(props: ProductCardsProps) {
	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div
					className={styles['head']}
					style={{ backgroundImage: `url(${props.cover})` }}
				>
					<p className={styles['price']}>
						{props.price} <span className={styles['currency']}>₽</span>
					</p>
					<button className={styles['add-to-cart']}>
						<img src='/add-to-cart.svg' alt='' />
					</button>
					<p className={styles['rating']}>{props.rating}</p>
				</div>
				<div className={styles['footer']}>
					<h2 className={styles['title']}>{props.name}</h2>
					<p className={styles['description']}>{props.description}</p>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
