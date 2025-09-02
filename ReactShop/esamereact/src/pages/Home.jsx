import { useEffect, useState,} from "react"
import { ClimbingBoxLoader } from "react-spinners"
import { Alert } from "react-bootstrap"
import Product from "../components/Product"
import ProductFilters from "../components/ProductFilters"
import { useSearchParams } from "react-router"
import Footer from "../components/Footer"



const Home = () => {
  const [products, setProducts] = useState([]) //inizialmente l'array di prodotti che fetcho deve essere vuoto
  const [selectedProduct, setSelectedProduct] = useState(null) //Lifting State Up così posso passare le props di controllo nel prodotto, altrimenti gli oggetti conoscono solo il loro stato
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  //Lo stato dei Setter dei filtri deve essere assegnato nel padre e passeremo ai filtri come props i filtri devono poter richiare i setter.
  // Teniamo traccia tramite stato del valore dei filtri, poi dovremo fare in modo che quando l'utente cambia il dropdown cambia il valore dei filtri.
  // Per modificare lo stato del padre modificheremo lo stato passando i setter come props
  //const [limit, setLimit] = useState(20)
  //const [category, setCategory] = useState("")
  //const [search, setSearch] = useState("") 

  // Refector con Search Parameters al posto dello state
  const[searchParams, setSearchParams] = useSearchParams()
  const limit = searchParams.get("limit") || 20 
  const category = searchParams.get("category") || ""
  const search = searchParams.get("search") || ""

  const fetchProducts = async () => { //creo una funzione nello use state che ci fa fetch e che poi invocheremo per ritornare i dati
      try{
        let url = "https://api.escuelajs.co/api/v1/products/"
        if (limit) url += "?offset=0&limit=" + limit
        if(category) url += "&categorySlug=" + category
        if (search) url += "&title=" + search

        setLoading(true)
        await new Promise(res => setTimeout(res, 2000))
        const response = await fetch(url)
        const products = await response.json()
        console.log(products)
        if (!response.ok) throw new Error("HTTP ERROR!")
        setProducts(products) // adesso settiamo l'array vuoto dello stato che utilizzeremo per gestire i prodotti e lo inizializzeremo con i nostri prodotti
        setLoading(false)
      } catch(error) {
        console.log(error)
        setError(error.message)
      } finally {
        // Finally serve per eseguire del codice a prescindere se ci sia stato un errore oppure no
        setLoading(false)
      }
    }

  useEffect(() => {
      fetchProducts()
    }, [limit, category])


  const handleSelect = selected => {
    setSelectedProduct(selected)
  }


  

  // Se non è un nuovo prodotto renderizza tutto questo
  return (
    <> 
    <ProductFilters fetchProducts={fetchProducts} setSearchParams={setSearchParams} />
    <div className="loader-container" >
    {loading && <ClimbingBoxLoader color="#7aa2ff" size={20}/>}
    </div>
      {error && <Alert>❌ Error: {error}</Alert>}
      {!error && products.length > 0
        ? products.map(product => <Product key={product.id} {...product} product={product} selectedProduct={selectedProduct} handleSelect={handleSelect} />)
        : !error && <div>NO PRODUCTS FOUND</div>}
      {error && <Alert varian="danger">{error}</Alert>}
      <Footer></Footer>
    </>
)}

export default Home