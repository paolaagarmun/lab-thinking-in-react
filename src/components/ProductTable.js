import ProductRow from './ProductRow';

function ProductTable(props) {
  //console.log("PROPS:", props.products)((
  // const productList = props.products.map((prod, i) => {
  //     re
  // })
  return (
    <table className='products-tables'>
      <thead >
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {props.products.map((product) => {
        return <ProductRow key={product.id} name={product.name} price={product.price} inStock={product.inStock}/>;
      })}
    </table>
  );
}

export default ProductTable;
