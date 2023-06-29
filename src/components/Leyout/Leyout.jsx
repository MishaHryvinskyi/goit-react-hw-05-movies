import { Outlet } from "react-router-dom";
import { LeyoutList, StyledNavLink } from './Leyout.styled';

const Leyout = () => {
    return <div>
        <header>
            <nav>
                <LeyoutList>
                    <li>
                        <StyledNavLink to="/">
                                Home
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/movies">
                                Movies
                        </StyledNavLink>
                    </li>
                </LeyoutList>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}

export default Leyout;