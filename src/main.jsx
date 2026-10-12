import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  
            {/* Pure UI m constantly applied rhega jisko bhi access krna hoga vo kr skta h means store av pure application m easily accessible h jisko bhi access krna h easily access kr skta h */}
       <App />
    </Provider>
  
  </StrictMode>,
)
