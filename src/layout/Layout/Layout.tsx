import { NavLink, Outlet } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Layout.module.css';
export function Layout() {
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
					<NavLink className={styles['link']} to='/'>
						<img src='/document.svg' alt='Иконка меню' /> Меню
					</NavLink>
					<NavLink className={styles['link']} to='/cart'>
						<img src='/cart.svg' alt='Иконка корзины' />
						Корзина
					</NavLink>
				</div>
				<Button
					viewType='small'
					className={styles['exit-button']}
					icon='/exit.svg'
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
