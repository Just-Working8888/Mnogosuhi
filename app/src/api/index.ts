import axios from 'axios';
import auth from './auth';
import cart from './cart'
import cart_item from './cart_item'
import city from './city'
import contact from './contact'
import faq from './faq'
import products from './product'
import promotions from './promotions'
import reviews from './reviews'
import settings from './settings'
import tables from './table'
import table_order from './table_order'
import table_order_item from './table_order_item'
import users from './users'
import categories from './categories'
import biling from './biling'


const instance = axios.create({
  // @ts-ignore
  baseURL: window.REACT_APP_SERVER_API !== 'REPLACE_REACT_APP_SERVER_API' ? window.REACT_APP_SERVER_API : process.env.REACT_APP_SERVER_API || 'https://backend.mnogosushi.kg/api/v1',
  // headers: {
  //   Authorization: `Bearer ${getCookie('access_token')}`
  // }


})
//@ts-ignore
console.log(process.env.REACT_APP_SERVER_API, window.REACT_APP_SERVER_API);


// instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const kc_access = getCookie('kc-access') || 'test_token';
//   if (kc_access) config.headers!['kc-access'] = kc_access;
//   return config
// });





const api = {
  ...auth,
  ...cart,
  ...cart_item,
  ...city,
  ...contact,
  ...faq,
  ...products,
  ...promotions,
  ...reviews,
  ...settings,
  ...tables,
  ...table_order,
  ...table_order_item,
  ...users,
  ...categories,
  ...biling
}

export { instance, api };

