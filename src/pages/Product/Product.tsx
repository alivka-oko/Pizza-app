import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import { ProductPage } from '../../components/ProductPage/ProductPage';

export function Product() {
  const { data } = useLoaderData() as { data: Product };
  return (
    <>
      <Suspense fallback={'Загружаю...'}>
        <Await resolve={data}>
          {(product) => <ProductPage product={product}></ProductPage>}
        </Await>
      </Suspense>
    </>
  );
}

export default Product;
