import CardProjet from './cardProjet'
import projets from '../projets.json'

function Projets() {
    return (
        <article id="projects" className="projets">
             <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
            </svg>
            <h2>PROJECTS</h2>
            <div className="ligne"></div>
            <div className='liste-projets'>
                {
                    projets.map((projet) => (
                        <CardProjet key={projet.id} id={projet.id} titre={projet.title} categorie={projet.categorie} technos={projet.technologie} imgCover={projet.cover} />
                    ))
               }
            </div>
            <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
            </svg>
        </article>
    )
};

export default Projets;