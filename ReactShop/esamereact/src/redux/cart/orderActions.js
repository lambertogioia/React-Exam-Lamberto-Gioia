// Dobbiamo utilizzare Redux Thunk per gestire il submit di un ordine perché essa è un'operazione ASINCRONA
// che non può venir gestita dal semplice Redux
// Qui strutturiamo l'implementazione thunk utilizzata per gestire lo stato globale rispetto le operazioni asyncrone e aggiornare poi lo stato globale.

import { clearCart } from "./cartActions"

// Gli action creators THUNK sono delle funzioni che ritornano funzioni (e queste possono essere quindi async)
// IL SENSO DI THUNK ENTRA QUANDO DEVO FARE UNA FETCH E DOPO DEVO FARE UN DISPATCH CIOE' UNA SECONDA OPERAZIONE CHE POTREBBERE ESSERE IN QUESTO CASO CLEAR CART QUINDI THUNK
// QUELLA DISPATCH VA A INFLUENZARE LO STATO GLOBALE DEI COMPONENTI A QUALSIASI LIVELLO DI RENDERING PER QUESTO DEVO USARE THUNK PER GLOBALIZZARE ANCHE LA FETCH ASYNCRONA
export const submitOrder = orderData => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(orderData),

            })
            const data = await response.json()
            console.log("Order submitted successfully!", data)
            dispatch(clearCart())
        } catch (error) {
            console.log(error)
        }
    }
}