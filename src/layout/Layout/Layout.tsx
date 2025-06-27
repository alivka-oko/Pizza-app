import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';
export function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((s: RootState) => s.user.profile);
  const items = useSelector((s: RootState) => s.cart.items);

  const logout = () => {
    dispatch(userActions.logout());
    navigate('/auth/login');
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className={styles['layout']}>
      <div className={styles['left-side']}>
        <div className={styles['user']}>
          <img src='/user-image.png' alt='' className={styles['user-image']} />
          <div className={styles['user-name']}>
            <p className={styles['name']}>{profile?.name}</p>
            <p className={styles['email']}>{profile?.email}</p>
          </div>
        </div>
        <div className={styles['menu']}>
          <NavLink className={styles['link']} to='/'>
            <img src='/document.svg' alt='Иконка меню' /> Меню
          </NavLink>
          <NavLink className={styles['link']} to='/cart'>
            <img src='/cart.svg' alt='Иконка корзины' />
            Корзина
            <span className={styles['cart-counter']}>
              {items.reduce((acc, i) => {
                return (acc += i.count);
              }, 0)}
            </span>
          </NavLink>
        </div>
        <Button
          viewType='small'
          className={styles['exit-button']}
          icon='/exit.svg'
          onClick={logout}
        >
          Выйти
        </Button>
      </div>
      <div className={styles['right-side']}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
