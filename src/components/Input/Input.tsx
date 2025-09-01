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
  onChange,
  ...props
}: InputProps) {
  return (
    <div className={cn(styles['input-container'], className)}>
      {label ? <label htmlFor={name}>{label}</label> : ''}
      <div className={styles['input']}>
        {icon ? <img src={icon} className={styles['icon']} alt='иконка' /> : ''}
        <input
          {...props}
          onChange={onChange}
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
