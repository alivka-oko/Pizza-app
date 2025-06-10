import InputSearch from '../../components/InputSearch/InputSearch';
import Headling from '../../components/Headling/Headling';
import styles from './Menu.module.css';
import ProductList from '../../components/ProductList/ProductList';
import { PREFIX } from '../../helpers/api';
import type { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const getMenu = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
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
			<ProductList products={products} />
		</>
	);
}

export default Menu;
