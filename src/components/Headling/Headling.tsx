import styles from './Headling.module.css';
import type { HeadlingProps } from './HeadlingProps';

export function Headling({ children, ...props }: HeadlingProps) {
  return (
    <h1 className={styles['h1']} {...props}>
      {children}
    </h1>
  );
}

export default Headling;
