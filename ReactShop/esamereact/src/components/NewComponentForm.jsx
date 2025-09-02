import { useState } from "react"
import { Alert } from "react-bootstrap"

function NewComponentForm  ()   {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [images, setImages] = useState("")
    const [error, setError] = useState(null)
    const [response, setResponse] = useState(null)
    //faccio un oggetto con i campi di errore già pronti
    const [validationErrors, setValidationErrors] = useState({
    title: "",
    price: "",
    description: "",
    images: "",
    category: "",
  })

    const validateForm = () => {
    let isValid = true
    const errors = { title: "", price: "", description: "", images: "", category: "" }
    console.log(price)
    if (parseFloat(price) < 0) {
      isValid = false
      errors.price = "Please enter a valid price greater (or equal) than 0"
    }

    if (!/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/i.test(images)) {
      isValid = false
      errors.images = "Please enter a valid URL"
    }

    setValidationErrors(errors)

    return isValid
  }

    const handleSubmit = async event => {
        event.preventDefault()
        console.log("SUBMIT")
        if (!validateForm()) return

        const productData = {
            title,
            price,
            description,
            categoryId,
            images:[],
        }

        try {
            const res = await fetch ("https://api.escuelajs.co/api/v1/products/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            })

            const responseData = await res.json()
            setResponse(responseData)
            //Una volta fatto il submit resetto il form a vuoto pronto per ripartire
            setTitle("")
            setPrice("")
            setCategoryId("")
            setDescription("")
            setImages("")
            console.log(responseData)
        } catch (error) {
            console.log(error)
            setError(error.message)
            
        }
    }

    return (
        <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required value={title} onChange={ event => setTitle(event.target.value)}/>

        <label htmlFor="price">Price</label>
        <input type="text" id="price" required value={price} onChange={ event => setPrice(event.target.value)}/>
        {validationErrors.price && <Alert variant="danger">{validationErrors.price}</Alert>}
        <label htmlFor="description" >Description</label>
        <textarea id="description" value={description} onChange={ event => setDescription(event.target.value)}/>


        <label htmlFor="category-select">Category:</label>
        <select id="category-select" value={categoryId} onChange={ event => setCategoryId(event.target.value)} >
            <option value="">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option> 
        </select>
        {/*Qui dobbiamo utilizzare la validazione personalizzata per verificare che l'url sia definito e giusto*/} 
        <label htmlFor="images">Image URL</label>
        <input type="text" id="images" required value={images} onChange={ event => setImages(event.target.value)}/>
        {validationErrors.images && <Alert variant="danger">{validationErrors.images}</Alert>}
        <button type="submit">Add Product</button> 
    </form>
    {response && <Alert varian="success">Product added succesfully{error}</Alert>}
    {error && <Alert varian="danger">{error}</Alert>}
    </>
    )
}

export default NewComponentForm