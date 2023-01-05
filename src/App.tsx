import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/index.css'

const HomePage = lazy(() => import('./pages/home'))

export default function App() {
   return (
      <Suspense fallback={<>loading</>}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/proyectos" element={<HomePage />} />
            </Routes>
         </BrowserRouter>
      </Suspense>
   )
}
