import Presentation from "../components/presentation";
import About from "../components/About"
import Skills from "../components/skills";
import Contact from "../components/contact";


function Home() {
    return (
        <section className="page-accueil">
            <Presentation />
            <About />
            <Skills />
            <Contact />
        </section>
        
    )
};

export default Home;