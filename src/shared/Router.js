import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Post from '../pages/Post'
import Product from '../pages/Product'
import Register from '../pages/Register'
import RegisterBusiness from '../pages/RegisterBusiness'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/auth" element={<RegisterBusiness />} />
        <Route path="/product" element={<Product />} />
        <Route path="/post" element={<Post />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
