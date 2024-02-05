import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/ProductCard/ProductCard.component';

import './Shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Shop;
