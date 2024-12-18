import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { productsLoader } from '../services/loaders/productsLoader';
import FormNewProduct from '../components/FormNewProduct';
import newProductAction from '../services/actions/newProductAction';
import ProductDetails from '../components/ProductDetails';
import { productDetailsLoader } from '../services/loaders/productDetailsLoader';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import FormNewCliente from '../components/FormNewCliente';
import ClienteDetails from '../components/ClienteDetails';

import { clienteLoader } from '../services/loaders/clienteLoader';
import { clienteDetailsLoader } from '../services/loaders/clienteDetailsLoader';
import FormEditProduct from '../components/FormEditProduct';
import editProductAction from '../services/actions/editProductAction';
import deleteProductAction from '../services/actions/deleteProductAction';
import newClienteAction from '../services/actions/newClienteAction'; 



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: productsLoader,
        children: [
          { path: '/products/create-product', element: <FormNewProduct />, action: newProductAction },
          { path: '/products/:id', element: <ProductDetails />, loader: productDetailsLoader},
          { path: '/products/edit-product/:id', element: <FormEditProduct />, action: editProductAction, loader: productDetailsLoader },
          { path: '/products/:id/delete-product',  action: deleteProductAction}
        ],
      },
      {
        path: '/customers',
        element: <Customers />,
        loader: clienteLoader,
        children: [
          { path: '/customers/create-customers', element: <FormNewCliente />, action: newClienteAction },
          { path: '/customers/:id', element: <ClienteDetails />, loader: clienteDetailsLoader}
        ],
      }
    ],
  },
]);