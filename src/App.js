
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import AddItem from './Componants/AddItem/AddItem';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import MyItems from './Componants/MyItems/MyItems';
import ManageItems from './ManageItems/ManageItems';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/order" element={<AddItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
