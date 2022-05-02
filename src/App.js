
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import AddItem from './Componants/AddItem/AddItem';

import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import ManageItems from './Componants/ManageItems/ManageItems';
import MyItems from './Componants/MyItems/MyItems';
import Notfound from './Componants/Notfound/Notfound';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myItems" element={<MyItems></MyItems>} />
        <Route path="/manageItems" element={<ManageItems></ManageItems>} />
        <Route path="/addItem" element={<AddItem></AddItem>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/*" element={<Notfound></Notfound>} />

      </Routes>
    </>
  );
}

export default App;
