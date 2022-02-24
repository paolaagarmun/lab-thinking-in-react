import { useEffect, useState } from "react";
import jsonData from '../data.json'

function SearchBar(props) {
    const [search, setSearch] = useState("");
    const [stock, setStock] = useState(false);


    useEffect(() => {
        let filteredProducts = [...jsonData].filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase())
        })
        if(stock) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.inStock
            })
        }
       // console.log(filteredProducts)
        props.setProducts(filteredProducts)
    },[stock, search])

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    const handleStock = () => {
        setStock(!stock)
    }

    return (
        <div style={{margin:25}}>
            <h3>Search</h3>
            <input type="text" onChange={handleSearch}/>
            <br/>
            <input type="checkbox" onChange={handleStock}/><label>Only show products in stock</label>
        </div>
    )
}

export default SearchBar