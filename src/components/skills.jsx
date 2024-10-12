import logoMongoDB from '../assets/mongodb.svg';
import logoLighthouse from '../assets/lighthouse.svg'
import logoNotion from '../assets/notion-logo.svg'

function Skills() {
    return(
        <article className="competences">
            <h2>SKILLS</h2>
            <div className="ligne"></div>
            <div className="bloc-icones-competences">
                <div className='carte-competence html'>
                    <i className="fa-brands fa-html5"></i>
                    <p>HTML5</p>
                </div>
                <div className="carte-competence css">
                    <i className="fa-brands fa-css3"></i>
                    <p>CSS3</p>
                </div>
                <div className="carte-competence sass">
                    <i className="fa-brands fa-sass"></i>
                    <p>Sass</p>
                </div>
                <div className="carte-competence js">
                    <i className="fa-brands fa-js"></i>
                    <p>JavaScript</p>
                </div>
                <div className="carte-competence react">
                    <i className="fa-brands fa-react"></i>
                    <p>ReactJS</p>
                </div>
                <div className="carte-competence node">
                    <i className="fa-brands fa-node"></i>
                    <p>NodeJS</p>
                </div>
                <div className="carte-competence mongodb">
                    <img src={logoMongoDB} alt="logo MongoDB" />
                    <p>MongoDB</p>
                </div>
                <div className="carte-competence lighthouse">
                    <img src={logoLighthouse} alt="logo Lighthouse" />
                    <p>Lighthouse</p>
                </div>
                <div className="carte-competence notion">
                    <img src={logoNotion} alt="logo Notion" />
                    <p>Notion</p>
                </div>
            </div>
        </article>
    )
};

export default Skills;