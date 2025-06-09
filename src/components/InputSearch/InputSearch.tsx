import Input from '../Input/Input';
import styles from './InputSearch.module.css';

export function InputSearch() {
	return (
		<Input
			name='search'
			className={styles['search']}
			icon='/search.svg'
			placeholder='Введите блюдо или состав'
		></Input>
	);
}

export default InputSearch;
