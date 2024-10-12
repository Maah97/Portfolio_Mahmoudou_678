import ImgOrdi from '../assets/ordi.png';
import FrIcone from '../assets/fr-language-icon.png';
import EnIcone from '../assets/en-language-icon.png';
import imgTwitter from '../assets/twitter.png';
import CV from '../assets/CV_MAHMOUDOU_ANGLAIS.pdf'

function Presentation() {
    return (
        <article className="presentation">
            <div className='bloc-de-presentation'>
                <div className='icones-reseaux-sociaux'>
                    <a href="https://linkedin.com/in/mahmoudou-abdoul-nganiyyou-2b805a180" rel='noreferrer' target='_blank'>
                        <i id='linkedin' className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Maah97" rel='noreferrer' target='_blank'>
                        <i id='github' className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://x.com/mahmoudouabdoul" rel='noreferrer' target='_blank'>
                        <img id='twitter' src={imgTwitter} alt="X anciennement twitter" />
                    </a>
                </div>
                <div className='txt-presentation'>
                    <h1>HELLO, WELCOME TO MY PORTFOLIO OF WEB DEVELOPPER</h1>
                    <p>My name is Mahmoudou Abdoul Nganiyyou and i'm a Result-Oriented fullstack Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
                    <a href={CV} download="CV_Mahmoudou.pdf" rel='noreferrer' target='_blank'>Download my CV</a>
                </div>
                <div className='image-presentation-et-background'>
                    <img className='ordi' src={ ImgOrdi } alt="Ordinateur de travail d'un developpeur web" />
                    <div className='changement-background'>
                        <div className='interrupteur-background'></div>
                        <i id='sun' className="fa-solid fa-sun"></i>
                        <i id='moon' className="fa-solid fa-moon"></i>
                    </div>
                </div>
            </div>
            <div className='langage'>
                <img className='Fr' src= {FrIcone} alt="Icone langue française" />
                <img className='En' src= {EnIcone} alt="Icone langue anglaise" />
            </div>
        </article>
    )
};

export default Presentation;