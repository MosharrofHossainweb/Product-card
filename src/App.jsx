import React from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import ProductDetail from './Component/ProductDetail'

const App = () => {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/ProductDetail' element={<ProductDetail/>}/>

          </Route>
    </Route>
  ))

  return (
    <>

      <RouterProvider router={route}/>
    </>
  )
}

export default App
