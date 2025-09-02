import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router"
import { addToCart } from "../redux/cart/cartActions.js"


function Product({ id, title, price, images, discount, description, purchases, stock, selectedProduct, handleSelect, product }) { // qui devo recuperare le differenze nelle output props del fetchato dall'API 
  const [productPrice, setProductPrice] = useState(price)
  const dispatch = useDispatch()




  const discountedPrice = discount > 0 ? productPrice - (productPrice * discount) / 100 : productPrice

  const isSelected = id === (selectedProduct && selectedProduct.id)

  return (
    <div className={`product ${stock === 0 ? "out-of-stock" : ""} ${isSelected ? "selected" : ""}`} onClick={() => handleSelect({ id })}>
      <img src={images} alt={title} className="product-img" />
      <h2 className="product-title">{title}</h2>
      <p>
        Prezzo: ${discount > 0 ? <s>{productPrice}</s> : productPrice} {discount > 0 && "--> " + discountedPrice.toFixed(2)}
      </p>
      <p>{description || "No Description"}</p>
      <p>Purchased {purchases ?? "No data available"}</p>
      <button onClick={() => setProductPrice(currentPrice => currentPrice + 10)}>Aggiorna Prezzo</button>
      <button onClick={()=>dispatch(addToCart(product))}>Aggiungi al carrello</button>
      <button>
        <Link to={`/products/${id}`}>Inspect Product</Link>
      </button>
    </div>
  )
}

export default Product