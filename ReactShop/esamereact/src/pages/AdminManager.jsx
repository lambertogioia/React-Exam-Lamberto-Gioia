import { NavLink } from "react-router"


const AdminManager = () => {

    // Qui in questa pagina ci andranno i componenti che servono a renderizzare tutte le operazioni che può fare un admin come, aggiungere un prodotto
    // rimuovere un prodotto o aggiornarlo. Magari manteniamo solo le prime due per semplicità. Però questo ci vuole. 
    //Intanto lo lascio qui per reminder
    return(
        <><div><button>
            <NavLink to='/createproduct' style={{ color: "white", textDecoration: "none" }}>
            Add Product
            </NavLink>            
        </button>
        <button>
            <NavLink to='/deleteproduct' style={{ color: "white", textDecoration: "none" }}>
            Delete Product
            </NavLink>
        </button>
            
            </div>
            
        </>
    )
}

export default AdminManager