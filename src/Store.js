import { configureStore } from '@reduxjs/toolkit'
import ProductDetail from './Component/ProductDetail'

export default configureStore({
  reducer: {
    counter:ProductDetail
  },
})