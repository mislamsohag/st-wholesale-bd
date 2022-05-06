
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import AddItem from './Componants/AddItem/AddItem';

import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import ManageItems from './Componants/ManageItems/ManageItems';
import MyItems from './Componants/MyItems/MyItems';
import Notfound from './Componants/Notfound/Notfound';
import OurProducts from './Componants/OurProduts/OurProducts';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import Register from './Componants/Register/Register';
import ProductDetails from './Componants/ProductDetails/ProductDetails';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/pDetails" element={<ProductDetails />} />
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
        <Route path="/addItem" element={
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        } />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/*" element={<Notfound></Notfound>} />

      </Routes>
    </>
  );
}

export default App;
