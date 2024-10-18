import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AxiosInterceptor } from './api/axios.interceptors.ts'

// Intercepto que toma todas las solicitudes y por ejemplo agrega un token de autorización
AxiosInterceptor()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
