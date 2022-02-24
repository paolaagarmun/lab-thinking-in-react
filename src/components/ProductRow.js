const ProductRow = (props) => {
  //console.log('PROPPSSS', props);

  return (
    <tbody >
      <tr key={props.id}>
        <td style={{ color: props.inStock ? 'black' : 'red' }}>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    </tbody>
  );
};

export default ProductRow;
