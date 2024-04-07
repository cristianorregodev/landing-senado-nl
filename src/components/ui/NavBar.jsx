import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link className="navbar__item" to="/">
                        Inicio
                    </Link>
                    <Link className="navbar__item" to="/propuestas">
                        Propuestas
                    </Link>
                    <Link className="navbar__item" to="/">
                        Red de apoyo
                    </Link>
                    <Link className="navbar__item" to="/">
                        Vota bien
                    </Link>
                    <Link className="navbar__item" to="/">
                        Blog
                    </Link>
                </div>
            </nav>
        </>
    )
}
