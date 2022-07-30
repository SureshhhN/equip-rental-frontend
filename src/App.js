import Header from './components/Header';
import SignUp from './components/register';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>

    <div>
      
      <Header/>
       <Routes>
       <Route path="/" element={<Home />}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/" />
      </Routes>
    
    </div>

    </BrowserRouter>
  );
}

export default App;