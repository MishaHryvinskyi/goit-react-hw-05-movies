import { Outlet, NavLink } from "react-router-dom";
import { LeyoutList, LeyoutItem } from './Leyout.styled';

const StyledNavLink = {
    color: '#453953', 
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    fontSize: '20px',
    fontWeight: '600'
}

const Leyout = () => {
    return <div>
        <nav>
            <LeyoutList>
                <LeyoutItem>
                    <NavLink 
                        to="/" 
                        style={StyledNavLink}>
                            Home
                    </NavLink>
                </LeyoutItem>
                <LeyoutItem>
                    <NavLink 
                        to="/movies" 
                        style={StyledNavLink}>
                            Movies
                    </NavLink>
                </LeyoutItem>
            </LeyoutList>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
}

export default Leyout;