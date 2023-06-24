import { Outlet, NavLink } from "react-router-dom";
import { LeyoutList, LeyoutItem } from './Leyout.styled';

const Leyout = () => {
    return <div>
        <nav>
            <LeyoutList>
                <LeyoutItem>
                    <NavLink to="/">Home</NavLink>
                </LeyoutItem>
                <LeyoutItem>
                    <NavLink to="/movies">Movies</NavLink>
                </LeyoutItem>
            </LeyoutList>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
}

export default Leyout;