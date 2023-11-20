// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Customers from './Pages/Customers';
import Dashboard from './Pages/Dashboard';
import Layout from './components/Layout';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import Product from './Pages/Product';
import Admin from './Pages/Admin';
import Hr from './Pages/Hr';
import Store from './Pages/Store';


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/products" element={<Product />} />
            <Route path="/admin" element={< Admin />} />
            <Route path="/hr" element={< Hr/>} />
            <Route path="/store" element={< Store />} />

          </Routes>
        </Layout>


      </BrowserRouter>
    </>
  )
}

export default Router;