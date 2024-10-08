import Presentation from "../components/presentation";
import About from "../components/About"
import Skills from "../components/skills";

function Home() {
    return (
        <section className="page-accueil">
            <Presentation />
            <About />
            <Skills />
        </section>
        
    )
};

export default Home;