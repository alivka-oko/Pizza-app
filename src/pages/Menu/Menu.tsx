import InputSearch from '../../components/InputSearch/InputSearch';
import Title from '../../components/Headling/Headling';
import styles from './Menu.module.css';
import ProductList from '../../components/ProductList/ProductList';
import { mockData } from '../../components/ProductList/mockData';

export function Menu() {
	return (
		<>
			<div className={styles['header']}>
				<Title>Меню</Title>
				<InputSearch></InputSearch>
			</div>
			<ProductList products={mockData} />
		</>
	);
}

export default Menu;
