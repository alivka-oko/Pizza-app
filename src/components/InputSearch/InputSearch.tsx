import type { ChangeEvent } from 'react';
import Input from '../Input/Input';
import styles from './InputSearch.module.css';

export function InputSearch({ onChange }: { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <Input
      name='search'
      className={styles['search']}
      icon='/search.svg'
      placeholder='Введите блюдо или состав'
      onChange={onChange}
    ></Input>
  );
}

export default InputSearch;
