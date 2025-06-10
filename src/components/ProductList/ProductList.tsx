import styles from './ProductList.module.css';
import type { ProductListProps } from './ProductListProps';
import ProductCard from '../ProductCard/ProductCard';

export function ProductList({ products }: ProductListProps) {
	const result = products.map((item) => (
		<ProductCard
			id={item.id}
			key={item.id}
			name={item.name}
			price={item.price}
			ingredients={item.ingredients}
			image={item.image}
			rating={item.rating}
		></ProductCard>
	));
	return <div className={styles['cards']}>{result}</div>;
}

export default ProductList;
