
import './App.css'
import MainLayout from './layout/MainLayout'
import Add from './pages/Add'
import Admin from './pages/Admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Uptade from './pages/Uptade';
import Detail from './pages/Detail';

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/add" element={<Add />} />
            </Route>

            <Route path='/uptade/:id' element={<Uptade />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
