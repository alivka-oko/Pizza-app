import type { ProductCardProps } from '../ProductCard/ProductCardProps';

export interface ProductListProps {
	products: ProductCardProps[];
	loading: boolean;
}
