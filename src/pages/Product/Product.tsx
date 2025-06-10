import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
	const { data } = useLoaderData() as { data: Product };
	return (
		<>
			<Suspense fallback={'Загружаю...'}>
				<Await resolve={data}>
					{(product) => <>Результат {product.name}</>}
				</Await>
			</Suspense>
		</>
	);
}

export default Product;
