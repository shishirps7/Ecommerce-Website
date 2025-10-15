import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ItemsContextProvider } from './ItemsContext.jsx'
import { CartContextProvider } from './CartContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <ItemsContextProvider>
   <CartContextProvider>
      <App />
      </CartContextProvider>
      </ItemsContextProvider>
   </BrowserRouter>

)
