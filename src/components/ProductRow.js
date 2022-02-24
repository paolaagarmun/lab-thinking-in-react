const ProductRow = (props) => {
  console.log('PROPPSSS', props);
  return (
    <tbody>
      <tr key={props.key} >
        <td>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    </tbody>
  );
};

export default ProductRow;
