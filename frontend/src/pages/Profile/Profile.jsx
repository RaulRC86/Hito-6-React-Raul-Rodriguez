import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <>
    <div className="perfil">
    <p>Raúl Rodríguez Clavero</p>
    <p>correo: raulrodriguez@gmail.com</p>
    <Link to="/" className="btn btn-light"><span className="botonP">🔒Logout</span></Link>
    </div>
    </>
  )
}

export default Profile