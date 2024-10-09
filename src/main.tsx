import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./global.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import 'react-lazy-load-image-component/src/effects/blur.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
