import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = () => {
    return(
        <>
        <Navbar/>
         <Outlet/>
         {/* Outlet rappresenta un "segnaposto" che mi serve per indacre dove dobramnno essrere posizonare le vaire Home , Admin ecc ecc  */ }
        <Footer/>
        </>
    )
}

export default Layout