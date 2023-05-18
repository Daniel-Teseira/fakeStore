import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Producto from './pages/Producto/Producto';
// import Register from './pages/Register/Register';
// import Registerv2 from './pages/Register/Registerv2';
import Registerv3 from './pages/Register/Registerv3';
import Home from './pages/Home/Home';

function App() {
  
  return (
    <>
      <Nav name='Rolling Code' />

      <Routes>

        <Route exact path='/' element={ <Home /> } />
        
        <Route path='/producto/:id' element={ <Producto /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Registerv3 /> } />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      
      
    </>
  );
}

export default App;
