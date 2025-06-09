import classNames from 'classnames';
import styles from './Input.module.css';
import type { InputProps } from './Input.props';
import cn from 'classnames';

export function Input({
	isValid = true,
	label,
	icon,
	className,
	name,
	...props
}: InputProps) {
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		console.log(e);
	};
	return (
		<div className={cn(styles['input-container'], className)}>
			{label ? <label htmlFor={name}>{label}</label> : ''}
			<div className={styles['input']}>
				{icon ? <img src={icon} className={styles['icon']} alt='иконка' /> : ''}
				<input
					{...props}
					onChange={handleChange}
					id={name}
					className={cn(styles['input-field'], classNames, {
						[styles['invalid']]: !isValid
					})}
				/>
			</div>
		</div>
	);
}

export default Input;
