import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router"
import Footer from "../components/Footer"
import { addToCart } from "../redux/cart/cartActions.js"

const ProductDetail = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {productId} = useParams() // recupera dall'url le info Dynamic Routing
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      const fetchProductDetail = async () => {
        try { 
            setLoading(true)
            setError(null)
            const response = await fetch ("https://api.escuelajs.co/api/v1/products/" + productId) // id arriverà da url e devo recuperarlo
            const product = await response.json()
            setProduct(product)
            
        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }    
     fetchProductDetail()
    },[productId])

    
    if(loading) return <div>Loading Product...</div>
    if(error) return <div><h2>{error}</h2></div>

    const { title, images, description} = product

    return (
    <div className="product">
      <Navbar/>
      <img src={images} alt={title} className="product-img" />
      <h2 className="product-title">{title}</h2>
      <p>{description || "No Description"}</p>
      <button onClick={()=>dispatch(addToCart(product))}>Aggiungi al carrello</button>
      <button>
        <Link to="" onClick={() => navigate(-1)}>Back to Products</Link>
      </button>
      <Footer/>
    </div>
  )
}

export default ProductDetail