function Contact() {
    function copie() {
        const email = document.getElementById('mail');
        const icone = document.getElementById('iconeCopie');
        navigator.clipboard.writeText(email.innerText);
        email.innerText = "Copié dans le presse-papies";
        email.style.color = "#036300";
        email.style.fontWeight = "500";
        icone.classList.remove('fa-regular');
        icone.classList.remove('fa-clipboard');
        icone.classList.add('fa-solid');
        icone.classList.add('fa-clipboard-check');
        icone.style.color = "#036300";
        setTimeout(()=> {
            email.innerText = "mahmoudouabdoul@gmail.com";
            email.style.color = "#430199";
            email.style.fontWeight = "300";
            icone.classList.add('fa-regular');
            icone.classList.add('fa-clipboard');
            icone.classList.remove('fa-solid');
            icone.classList.remove('fa-clipboard-check');
            icone.style.color = "#430199";
        },5000)
    }
    return (

        <article className="contact">
            <h2>CONTACT</h2>
            <div className="ligne"></div>
            <p>Feel free to Contact me by mail or by submitting the form below and I will get back to you as soon as possible</p>
            <div className="ligne"></div>
            <h3>My Email</h3>
            <a href="mailto:mahmoudouaboul@gmail.com">
                <div onClick={()=>copie} className="adresse-mail">
                    <p id="mail">mahmoudouabdoul@gmail.com</p>
                    <i id="iconeCopie" className="fa-regular fa-clipboard"></i>
                </div>
            </a>
            <div className="ligne"></div>
            <h3>Form to submit</h3>
            <form className="formulaire" action="">
                <div className="label-et-input">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="email" placeholder="Enter your name" />
                </div>
                <div className="label-et-input">
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="mail" placeholder="Enter your email" />
                </div>
                <div className="label-et-input">
                    <label htmlFor="title">Title of your project</label>
                    <input name="title" id="title" type="text" placeholder="Enter the title of your project" />
                </div>
                <div className="label-et-input">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Enter your message"></textarea>
                </div>
                <input id="submit" type="submit" />
            </form>
        </article>
    )
}

export default Contact