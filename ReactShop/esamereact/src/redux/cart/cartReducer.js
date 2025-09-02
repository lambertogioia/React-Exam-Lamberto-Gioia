// creare un stato per salvare i prodotti che uno seleziona
//Idea del reducer, cosa ci puo servire per costruire un carrello? Aggiungi, Rimuovi, Clear Cart, auomenta prodotto diminuisci prodotto
const initialState = {
    items: [],
    total: 0,

}
// cartReducer sarà una funzione chre prende lo stato e l'azione che ci arriva, implementerà uno switch case con tutti i casi dell'action di riferimento
export const cartReducer = (state = initialState, action ) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            //1.Verifichiamo se il prodotto esiste già nel carello(arriva nel payload)
            const index = state.items.findIndex(item => item.id === action.payload.id)
            let updateItems = [] // non posso modificare l'arry ma lo creo nuovo in cui andra a finire dopoo il map
            //2. a Se il prodotto esiste, incrementiamo la quantità
            if(index >= 0){
                
                updateItems = state.items.map(item => item.id === action.payload.product.id ? {...item, quantity: item.quantity + 1} : item )
  
            }else{

            //2.b Altrimenti lo agggiungiamo con quantità 1
            updateItems = [...state.items, {...action.payload, quantity: 1}]
            }
            const updatedTotal = updateItems.reduce((total, item) => total + item.price * item.quantity, 0)

            return {...state, items: updateItems, total: updatedTotal}
        }
            

        case "REMOVE_FROM_CART":{
            const filteredItems = state.items.filter(item => item.id !== action.payload)
            const updatedTotal = filteredItems.reduce((total, item) => total + item.price * item.quantity, 0)
            return {...state, items: filteredItems, total: updatedTotal} 
        }

        case "INCREASE_QUANTITY":{
            const updatedItems = state.items.map(item =>item.id === action.payload ? { ...item, quantity: item.quantity + 1 }: item)
            const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0)
            return { ...state, items: updatedItems, total: updatedTotal }
        }
            

        case "DECREASE_QUANTITY": {
            let updatedItems = state.items.map(item =>item.id === action.payload? { ...item, quantity: item.quantity - 1 }: item
            ).filter(item => item.quantity > 0) // se la quantità scende a 0, lo rimuoviamo
            const updatedTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0)
            return { ...state, items: updatedItems, total: updatedTotal }
        }
            

        case "CLEAR_CART":
            return { ...state, items: [], total: 0 }
    
        default:
            return state
    }
}