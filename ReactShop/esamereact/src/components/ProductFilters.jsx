import Navbar from "./Navbar";

function ProductFilters ({fetchProducts, setSearchParams,})  {
    //Utilizzeremo i setter all'interno dei componenti tramite gli eventi, per conoscere il valore del set limit passo l'oggetto event all'onChange e tramite il suo target identifihiamo l'ggetto selezionato
    return <div className="filters toolbar" >
        <Navbar/>
        <div className="filters-row">
        {/* Se passo solo un oggetto sovrascrivere i query parameters invece passando una callback posso accedere invece ai 
        query parameteresa attuali e aggiungere il nuomo parametro, facendo così una concatenazione utile nei filtri invece della sovrascrittura*/} 
        <label htmlFor="limit-select">Produts per page:</label>
        <select id="limit-select" className="select" onChange={ event => {console.log(event.target.value); setSearchParams(prevParams =>{
            prevParams.set("limit", event.target.value)
            return prevParams
        }) }}> 
            {/* Dovremmo far partire una fetch ogni volta che questo valore cambia sarà meglio anche fare un botttone per il search altrimenti parte un fetch continuamente 
            Vogliamo richiamare la fetch in diverse situazioni, qunado viene cliccato il button, non possimao chiamare la useEffect ,a la fectch. 
            Quindi dobbiamo estrarla dallo useEffect in modo da poter creare un on click che richiami la fetch. Alla fine dovremo sfruttare i valori per fare la fetch.
            Utilizzare i parametri dei filtri significa applicarli all'URL cioè cambiare l'URL. I filtri si mandato tramite i query parameters i request parameters*/} 
            <option value="">None</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>
        <label htmlFor="category-select" className="filters-label">Category:</label>
        <select id="category-select" className="select" onChange={ event => {console.log(event.target.value); setSearchParams(prevParams =>{
            prevParams.set("category", event.target.value)
            return prevParams
        })}}>
            <option value="">None</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option> 
        </select>
        <label htmlFor="search-input" className="visually-hidden"></label>
        {/*Nell'input field noi memorizziamo nello stato quello che l'utente ha scritto*/} 
        <input id="search-input" type="text" placeholder ="Search Products" onChange={event => {console.log(event.target.value); setSearchParams(prevParams =>{
            prevParams.set("search", event.target.value)
            return prevParams
        }) }} />
        
        <button type="submit" className="btn outline" onClick={fetchProducts}>🔎 Search</button> {/* Esempio di Handling event in cui gli passo il riferimento alla funzione
        invece di passargli una funzione in riga il nostro fetchproducts, sarebbe uguale all'handleClick delle slide. Handle click 
        è la funzione che gestisce la logica quando il click viene effettuato */}
    </div>
    </div>
}

export default ProductFilters
