import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Fallback } from './components/ui'
import './assets/css/index.css'

const HomePage = lazy(() => import('./pages/home'))
const ProjectsPage = lazy(() => import('./pages/projects'))

export default function App() {
   return (
      <Suspense fallback={<Fallback />}>
         <HashRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/proyectos" element={<ProjectsPage />} />
            </Routes>
         </HashRouter>
      </Suspense>
   )
}
