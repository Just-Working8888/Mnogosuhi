import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import Main from 'layout/Main/Main';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import BilingTable from 'routes/BilingTable/BilingTable';

const SingleProduckt = lazy(() => import('./routes/SingleProduckt/SingleProduckt'))
const MainPage = lazy(() => import('routes/MainPage/MainPage'))
const Cart = lazy(() => import('routes/Cart/Cart'))
const OrderPlacing = lazy(() => import('routes/OrderPlacing/OrderPlacing'))
const Contact = lazy(() => import('routes/Contact/Contact'))
const AboutUs = lazy(() => import('routes/AboutUs/AboutUs'))
const AllRevies = lazy(() => import('routes/AllRevies/AllRevies'))
const Shop = lazy(() => import('routes/Shop/Shop'))
const Menu = lazy(() => import('routes/Menu/Menu'))
const TablePage = lazy(() => import('routes/Table/TablePage'))
const Login = lazy(() => import('./Components/Login/Login'))
const SignUp = lazy(() => import('./Components/SignUp/SignUp'))
const FAQ = lazy(() => import('./routes/FAQ/FAQ'))

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><Login /></Suspense>} />
      <Route path='/signUp' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><SignUp /></Suspense>} />
      <Route path='/' element={<Main />}>
        <Route path='/' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><MainPage /></Suspense>} />
        <Route path='/food/:id' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><SingleProduckt /></Suspense>} />
        <Route path="cart" element={<Suspense fallback={<Spin spinning={true} fullscreen />}><Cart /></Suspense>} />
        <Route path="orders" element={<Suspense fallback={<Spin spinning={true} fullscreen />}><OrderPlacing /></Suspense>} />
        <Route path='contact' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><Contact /></Suspense>} />
        <Route path='about' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><AboutUs /></Suspense>} />
        <Route path='revies' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><AllRevies /></Suspense>} />
        <Route path='shop' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><Shop /></Suspense>} />
        <Route path='catalog' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><Menu /></Suspense>} />
        <Route path='faq' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><FAQ /></Suspense>} />
        <Route path='menu/:id' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><TablePage /></Suspense>} />
        <Route path='tablebiling/:id' element={<Suspense fallback={<Spin spinning={true} fullscreen />}><BilingTable /></Suspense>} />
      </Route>
      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />
    </Routes>
  );
}


export default App;