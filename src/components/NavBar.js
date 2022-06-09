import "./NavBar.css";
import NavLink from "./NavLink/NavLink";
export default function NavBar() {
    return (
        <nav className=" nav-main">
            <ul>
                <NavLink/>
                <li>Categoría 1</li>
                <li>Categoría 2</li>
                <CarWidget/>
            </ul>
        </nav>
    );
  }
  