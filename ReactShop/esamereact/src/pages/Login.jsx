import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"
import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault()
        //Login simulato
        if(email&&password){
            //Normalmente dovrei mandare una POST al server e si va alla pagina dopo
            navigate("/")
        } else {
            alert("Please enter email e password")
        }

    }
    return(
        <div className="auth-card">
            <Navbar/>
            <h2>User Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <label htmlFor="" className="form-label" >User Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="" className="form-label">User Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login