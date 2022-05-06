
import { useState, useEffect } from 'react';
const useProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/ourProducts')
        fetch('http://localhost:5000/ourProducts?limit=6')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useProducts;