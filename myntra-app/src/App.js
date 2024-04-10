// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import FakeStoreSingleProduct from './components/FakeStoreSingleProduct';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/fake-store-single-product/:id' element={<FakeStoreSingleProduct/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
