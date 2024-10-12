import { NavLink } from 'react-router-dom';
import photoProphile from '../assets/Photo-profil.jfif'

function Header() {
    const urlActuelle = window.location.href;
    const addresseRacine = urlActuelle.split("/")[2];
    return (
        <header>
            <div className='photo-et-nom'>
                <img src={photoProphile} alt="profil" />
                <p>MAHMOUDOU ABDOUL NGANIYYOU</p>
            </div>
            <nav>
                <NavLink className='navigation' to="/">HOME</NavLink>
                <a className='navigation' href={`http://${addresseRacine}/#about`}>ABOUT</a>
                <a className='navigation' href={`http://${addresseRacine}/#skills`}>SKILLS</a>
                <a className='navigation' href={`http://${addresseRacine}/#projects`}>PROJECTS</a>
                <a className='navigation' href={`http://${addresseRacine}/#contact`}>CONTACT</a>
            </nav>
        </header>
    )
};

export default Header;