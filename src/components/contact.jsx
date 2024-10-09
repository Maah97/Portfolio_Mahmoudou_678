function Contact() {
    return (
        <article id="contact" className="contact">
            <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
            </svg>
            <div className="txt-et-formulaire-de-contact">
                <h2>CONTACT</h2>
                <div className="ligne"></div>
                <p>Feel free to Contact me by mail or by submitting the form below and I will get back to you as soon as possible</p>
                <div className="ligne"></div>
                <h3>My Email</h3>
                <a href="mailto:mahmoudouaboul@gmail.com">
                    <div className="adresse-mail">
                        <p>mahmoudouabdoul@gmail.com</p>
                        <i className="fa-regular fa-clipboard"></i>
                    </div>
                </a>
                <div className="ligne"></div>
                <h3>Form to submit</h3>
                <form className="formulaire" action="">
                    <div className="label-et-input">
                        <label for="name">Name</label>
                        <input name="name" id="name" type="email" placeholder="Enter your name" />
                    </div>
                    <div className="label-et-input">
                        <label for="email">Email</label>
                        <input name="email" id="email" type="mail" placeholder="Enter your email" />
                    </div>
                    <div className="label-et-input">
                        <label for="title">Title of your project</label>
                        <input name="title" id="title" type="text" placeholder="Enter the title of your project" />
                    </div>
                    <div className="label-et-input">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" placeholder="Enter your message"></textarea>
                    </div>
                    <input id="submit" type="submit" />
                </form>
            </div>
            <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
            </svg>
        </article>
    )
}

export default Contact