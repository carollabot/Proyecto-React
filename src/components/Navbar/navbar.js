import "./navbar.css"
import logo from "./Assets/logo.gif"
import CartWidget from "../CartWidget/cartwidget"
import { Link, NavLink  } from "react-router-dom"


const Navbar = () => {
    return(
        <nav className="navBar" >
            <div className="navBrand">
                <Link to="/">
                <img style={{height:40}} src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="navBtn">
                <NavLink  to="/category/top" className="navLink">Top</NavLink >
                <NavLink  to="/category/bottom" className="navLink">Bottom</NavLink >
                <NavLink  to="/category/accesories" className="navLink">Accesories</NavLink >
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar