import imgTwitter1 from '../assets/logo-twitter.svg';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
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