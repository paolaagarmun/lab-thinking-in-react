import ProductRow from './ProductRow';

function ProductTable(props) {
  //console.log("PROPS:", props.products)((
  // const productList = props.products.map((prod, i) => {
  //     re
  // })
  return (
    <table className='products-tables'>
      <thead >
        <tr >
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {props.products.map((product, i) => {
        return <ProductRow key={i} name={product.name} price={product.price} />;
      })}
    </table>
  );
}

export default ProductTable;
