import { Outlet, NavLink } from "react-router-dom";

const Leyout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Домашня</NavLink>
                </li>
                <li>
                    <NavLink to="/films">Колекція</NavLink>
                </li>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
}

export default Leyout;