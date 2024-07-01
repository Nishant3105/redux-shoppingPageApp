import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS=[
    {
      id: 'p1',
      title: 'Product1',
      price: 23,
      description: 'this is first product'
    },
    {
      id: 'p2',
      title: 'Product2',
      price: 67,
      description: 'this is second product'
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
