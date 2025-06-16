import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Register.module.css';
export function Register() {
	return (
		<div className={styles['form']}>
			<Headling>Регистрация</Headling>
			<Input placeholder='Email' name='email' label='Ваш email'></Input>
			<Input
				placeholder='Пароль'
				name='password'
				type='password'
				label='Ваш пароль'
			></Input>
			<Input placeholder='Имя' name='name' label='Ваше имя'></Input>
			<Button viewType='big' className={styles['button']}>
				Зарегистрироваться
			</Button>
			<div className={styles['link-block']}>
				<p>Есть аккаунт?</p>
				<Link to='/auth/login' className={styles['link']}>
					Войти
				</Link>
			</div>
		</div>
	);
}

export default Register;
