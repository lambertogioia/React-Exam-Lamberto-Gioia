import { NavLink } from "react-router"
import { useSelector } from "react-redux"


function Navbar() {
  const linkStyle = {
    color: "rgba(211, 220, 250, 1)"
  }

  const activeStyle = {
    color: "#ce3983ff",
    fontWeight: "bold",
  }

  const cartTotal = useSelector(state => state.cart.total)

  return (
    <nav className="navbar">
      {/*Qui creo link di navigazione nella navibar a cui associo l'url creato in app.jsx se è attivo. Proprietà del Navlink */}
      <NavLink to="/" style={({isActive}) => ( isActive ? activeStyle : linkStyle )}>Home</NavLink>
      <NavLink to="/adminlogin" style={({isActive}) => ( isActive ? activeStyle : linkStyle )}>Admin Login</NavLink>
      <NavLink to="/login" style={({isActive}) => ( isActive ? activeStyle : linkStyle )}>User Login</NavLink>

      <button className="cart-btn">
          <NavLink to="/cart" style={{ color: "white", textDecoration: "none" }}>
            🛒 {cartTotal}
          </NavLink>
        </button>

    </nav>
  )
}

export default Navbar