import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import mystore from './Store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
    <App />

    </Provider>
  </StrictMode>,
)
