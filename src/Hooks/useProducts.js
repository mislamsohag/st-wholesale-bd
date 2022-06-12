
import { useState, useEffect } from 'react';
const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://secure-chamber-93784.herokuapp.com/ourProducts')

            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;

//secure-chamber-93784.herokuapp.com