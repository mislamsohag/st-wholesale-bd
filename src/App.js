
import { Route, Routes } from 'react-router-dom';
import About from './Componants/About/About';
import AddItem from './Componants/AddItem/AddItem';
import Home from './Componants/Home/Home';
import ManageItems from './Componants/ManageItems/ManageItems';
import MyItems from './Componants/MyItems/MyItems';
import OurProducts from './Componants/OurProduts/OurProducts';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import ProductDetails from './Componants/ProductDetails/ProductDetails';
import ProductUpdate from './Componants/ProductUpdate/ProductUpdate';
import Register from './Componants/Auth/Register/Register';
import Login from './Componants/Auth/Login/Login';
import NotFound from './Componants/Notfound/Notfound';
import Blogs from './Componants/Blogs/Blogs';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/ourProducts/:_id" element={<ProductDetails />} />
        <Route path="/myItems" element={
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        } />
        <Route path="/manageItems" element={
          <PrivateRoute>
            <ManageItems />
          </PrivateRoute>
        } />
        <Route path="/manageItems/:id" element={
          <PrivateRoute>
            <ProductUpdate />
          </PrivateRoute>
        } />
        <Route path="/addItem" element={
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        } />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
