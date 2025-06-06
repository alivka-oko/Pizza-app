import { Link, Outlet, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './layout.module.css';
import { useEffect } from 'react';
import cn from 'classnames';

export function Layout() {
	const location = useLocation();
	useEffect(() => {
		console.log(location);
	}, [location]);
	return (
		<div className={styles['layout']}>
			<div className={styles['left-side']}>
				<div className={styles['user']}>
					<img src='/user-image.png' alt='' className={styles['user-image']} />
					<div className={styles['user-name']}>
						<p className={styles['name']}>Антон Ларичев</p>
						<p className={styles['email']}>alaricode@ya.ru</p>
					</div>
				</div>
				<div className={styles['menu']}>
					<Link className={styles['link']} to='/'>
						<img src='/document.svg' alt='Иконка меню' /> Меню
					</Link>
					<Link
						className={cn(styles['link'], {
							[styles['active']]: location.pathname == '/cart'
						})}
						to='/cart'
					>
						<img src='/cart.svg' alt='Иконка корзины' />
						Корзина
					</Link>
				</div>
				<Button className={styles['exit-button']} icon='/exit.svg'>
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
