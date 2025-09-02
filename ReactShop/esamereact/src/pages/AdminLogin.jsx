import { useNavigate } from "react-router"
import { useState } from "react"
import Navbar from "../components/Navbar"

const AdminLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault()
        //Login simulato
        if(email&&password){
            //Normalmente dovrei mandare una POST al server e si va alla pagina dopo
            navigate("/adminmanager")
        } else {
            alert("Please enter email e password")
        }

    }
    return(
        <div className="auth-card">
            <Navbar/>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <label htmlFor="" className="form-label" >Admin Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="" className="form-label" >Admin Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn">Login</button>
            </form>

        </div>
    )
}

export default AdminLogin