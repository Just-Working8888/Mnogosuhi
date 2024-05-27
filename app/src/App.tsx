import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import { Login, SignUp } from 'Components';
import MainPage from 'routes/MainPage/MainPage';
import TestPage from 'routes/Test/Test';
import Main from 'layout/Main/Main';
import FullScreen from 'layout/FullScreen/FullScreen';
import Catalog from 'routes/Catalog/Catalog';
import SingleProduckt from 'routes/SingleProduckt/SingleProduckt';
import Cart from 'routes/Cart/Cart';
import OrderPlacing from 'routes/OrderPlacing/OrderPlacing';
import Contact from 'routes/Contact/Contact';
import AboutUs from 'routes/AboutUs/AboutUs';
import AllRevies from 'routes/AllRevies/AllRevies';
import Shop from 'routes/Shop/Shop';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/full' element={<FullScreen />}>
        <Route path='test/:id' element={<TestPage />} />

      </Route>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/food/:id' element={<SingleProduckt />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<OrderPlacing />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='revies' element={<AllRevies />} />
        <Route path='shop' element={<Shop />} />
      </Route>
      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />
    </Routes>
  );
}


export default App;