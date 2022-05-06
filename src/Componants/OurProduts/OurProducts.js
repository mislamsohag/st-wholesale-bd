import Navber from '../../Shared/Header/Navber/Navber';
import { Link, NavLink } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const OurProducts = () => {
    const [products] = useProducts();

    return (
        <div>
            <Navber></Navber>
            <section className='container text-center'>
                <h1>Our Products: {products.length}</h1>
                <div className='row'>
                    {
                        products?.map(product => (
                            <div className='col-sm-12 col-md-6 col-lg-4 g-3' key={product._id}>
                                <NavLink className='nav-link' to="/pDetails">
                                    <div className="card" >
                                        <img src={product.image} className="card-img-top" alt="Product Image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <div className='d-flex d-flex justify-content-between text-body mt-3'>
                                                <p className='m-0 p-0'>৳ {product.price}</p>
                                                <p className='m-0 p-0'>Stock : </p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default OurProducts;