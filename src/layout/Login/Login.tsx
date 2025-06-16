import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { useState, type FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/api';
import type { LoginResponse } from '../../interfaces/auth.interface';
export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};
export function Login() {
	const [error, setError] = useState<string | null>();
	const navigate = useNavigate();
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password
			});
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};
	return (
		<form onSubmit={submit} className={styles['form']}>
			<Headling>Вход</Headling>
			{error && <div className={styles['error']}>{error}</div>}
			<Input
				placeholder='Email'
				type='email'
				name='email'
				label='Ваш email'
			></Input>
			<Input
				placeholder='Пароль'
				name='password'
				type='password'
				label='Ваш пароль'
			></Input>
			<Button viewType='big' className={styles['button']}>
				Вход
			</Button>
			<div className={styles['link-block']}>
				<p className={styles['secondary']}>Нет аккаунта?</p>
				<Link to='/auth/register' className={styles['link']}>
					Зарегистрироваться
				</Link>
			</div>
		</form>
	);
}

export default Login;
