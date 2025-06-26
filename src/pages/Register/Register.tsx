import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Register.module.css';
import { useEffect, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export interface RegisterForm {
  email: { value: string };
  password: { value: string };
  name: { value: string };
}

export function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, authErrorMessage } = useSelector((s: RootState) => s.user);
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearAuthError());
    const { email, password, name } = e.target as typeof e.target &
      RegisterForm;
    await sendData(email.value, password.value, name.value);
  };

  const sendData = async (email: string, password: string, name: string) => {
    dispatch(register({ email, password, name }));
  };

  useEffect(() => {
    dispatch(userActions.clearAuthError());
  }, [dispatch]);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);
  return (
    <form className={styles['form']} onSubmit={submit}>
      <Headling>Регистрация</Headling>
      {authErrorMessage && <div className='error'>{authErrorMessage}</div>}
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
    </form>
  );
}

export default Register;
