import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DyAyala.ux</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" >Sobre mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services" >Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog" >Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contacto</Link>
                        </li>
                    </ul>
                </div>
                <form class="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;