import imgTwitter1 from '../assets/logo-twitter.svg';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
            </svg>
            <div className="contact-reseaux">
                <a href="mailto:mahmoudouaboul@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://linkedin.com/in/mahmoudou-abdoul-nganiyyou-2b805a180" rel='noreferrer' target='_blank'>
                    <i id='linkedin' className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Maah97" rel='noreferrer' target='_blank'>
                    <i id='github' className="fa-brands fa-github"></i>
                </a>
                <a href="https://x.com/mahmoudouabdoul" id='ImgTwitter' rel='noreferrer' target='_blank'>
                    <img id='twitter' src={imgTwitter1} alt="X anciennement twitter" />
                </a>
            </div>
            <p className="droit-reserve">
                <i className="fa-regular fa-copyright"></i>{" " + year + " Mahmoudou Abdoul Nganiyyou, all rights reserved"}
            </p>
        </footer>
    )
};

export default Footer;