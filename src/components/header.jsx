import { NavLink } from 'react-router-dom';
import photoProphile from '../assets/Photo-profil.jfif'

function Header() {
    return (
        <header>
            <div className='photo-et-nom'>
                <img src={photoProphile} alt="profil" />
                <p>MAHMOUDOU ABDOUL NGANIYYOU</p>
            </div>
            <nav>
                <NavLink className='navigation' to="/">HOME</NavLink>
                <a className='navigation' href="#about">ABOUT</a>
                <a className='navigation' href="#projets">PROJECTS</a>
                <a className='navigation' href="#contact">CONTACT</a>
            </nav>
        </header>
    )
};

export default Header;