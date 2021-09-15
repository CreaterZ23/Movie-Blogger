import { NavLink } from 'react-router-dom';
import Search from './Search';

function NavBar({handleSearch}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/Movie-Blogger">Home</NavLink>
            <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
            <NavLink className="nav-link" to ="/my-movies">My Movies</NavLink>
            <NavLink className="nav-link" to ="/hated-movies">Hated Movies</NavLink>

            <Search 
            handleSearch={handleSearch}
            />
        </nav>
    )
};

export default NavBar;