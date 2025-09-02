import {Routes, Route} from 'react-router'
import { Provider } from "react-redux"
import "./App.css"
import Home from "./pages/Home"
import Login from './pages/Login'
import Admin from './pages/AdminLogin'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Layout from './layout/Layout'
import store from './redux/store'
import AdminLogin from './pages/AdminLogin'
import AdminManager from './pages/AdminManager'
import Cart from './pages/Cart'
import NewComponentForm from './components/NewComponentForm'
import DeleteComponentForm from './components/DeleteComponentForm'

// dentro app dichiaro le mie rotte e main le userà

function App() {
  
  return (
  <Provider store={store}>
   <Routes>
    <Route element={<Layout/>}>
    {/*Qui creo nuove rotte url a cui associo la pagina/componente all'url che ho inventato*/}
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/adminmanager' element={<AdminManager/>}/>
      <Route path='/createproduct' element={<NewComponentForm/>}/>
      <Route path='/deleteproduct' element={<DeleteComponentForm/>}/>
    </Route>
    <Route path='/products/:productId' element={<ProductDetail/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </Provider>
  )
}

export default App

// Configurazione Redux, 1 faccio reducer, 2 creo delle actions come oggetti, 3 configuro lo store con tutti i reducer
// 4 implemento il providere nell'app per lo store.
