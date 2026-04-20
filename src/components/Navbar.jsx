import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return (
        <nav className="my-3 container">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <title>DyAyala.ux</title>
                    <span class="fs-4">DyAyala.ux</span>
                </a>
                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none"><Link className="nav-link" to="/">Inicio</Link></a>
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none"><Link className="nav-link" to="/about">Sobre mí</Link></a>
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none"><Link className="nav-link" to="/services">Servicios</Link></a>
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none"><Link className="nav-link" to="/blog">Blog</Link></a>
                    <a class="py-2 link-body-emphasis text-decoration-none"><Link className="nav-link" to="/contact">Contacto</Link></a>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar;