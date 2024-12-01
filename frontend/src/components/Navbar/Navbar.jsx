import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar=() =>{
    return(
        <>
    <nav>
      <h4>Pizzería Mamma Mía!</h4>
      <Link to="/"><button className='boton1'>🍕Home</button></Link>
      <Link to="/profile"><button className='boton1'>🔓Profile</button></Link>
      <Link to="/Login"><button className='boton1'>🔐Login</button></Link>
      <button>🔒Logout</button>
      <Link to="/Register"><button className='boton1'>🔐Register</button></Link>
      <div className="totalCompra">
      <Link to="/Cart"><button className='boton2'>🛒Total: $</button></Link>
    </div>
    </nav>
        </>
    )
}

export  default Navbar