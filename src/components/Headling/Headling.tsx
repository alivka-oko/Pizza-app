import styles from './Headling.module.css';
import type { HeadlingProps } from './HeadlingProps';

export function Headling({ children }: HeadlingProps) {
	return <h1 className={styles['title']}>{children}</h1>;
}

export default Headling;
