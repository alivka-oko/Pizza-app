import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { useEffect, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};
export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, authErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    dispatch(userActions.clearAuthError());
  }, [dispatch]);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearAuthError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };
  return (
    <form onSubmit={submit} className={styles['form']}>
      <Headling>Вход</Headling>
      {authErrorMessage && <div className='error'>{authErrorMessage}</div>}
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
