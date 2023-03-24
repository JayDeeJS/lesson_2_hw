import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <NavLink className="navLink" to={'/'}>Main</NavLink>
            <NavLink className="navLink" to={'/photos'}>Photos</NavLink>
        </nav>
    )
};

export default NavBar;