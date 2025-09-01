import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({
  children,
  viewType,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles['button'], styles['accent'], className, {
        [styles['big']]: viewType === 'big'
      })}
      {...props}
    >
      {icon ? (
        <>
          <img src='/exit.svg' alt='Иконка выйти' />
        </>
      ) : (
        ''
      )}
      {children}
    </button>
  );
}

export default Button;
