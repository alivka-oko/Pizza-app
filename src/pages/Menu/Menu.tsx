import InputSearch from '../../components/InputSearch/InputSearch';
import Title from '../../components/Headling/Headling';
import styles from './Menu.module.css';

export function Menu() {
	return (
		<>
			<div className={styles['header']}>
				<Title>Меню</Title>
				<InputSearch></InputSearch>
			</div>
		</>
	);
}

export default Menu;
