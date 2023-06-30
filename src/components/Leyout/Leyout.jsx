import { Outlet } from "react-router-dom";
import { LeyoutList, StyledNavLink } from './Leyout.styled';
import { RiHome2Line, RiFilmLine } from "react-icons/ri";

const Leyout = () => {
    return <div>
        <header>
            <nav>
                <LeyoutList>
                    <li>
                        <StyledNavLink to="/">
                               <RiHome2Line style={{ marginRight: '10px'  }}/> Home
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/movies">
                                Movies <RiFilmLine style={{ marginLeft: '10px'  }} />
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