import { useParams } from 'react-router-dom';
import projets from '../projets.json';
import Caroussel from '../components/caroussel';

function Projet() {
    const {id} = useParams();
    const projet = projets.find(item => item.id === id);
    return (
        <section className='projet'>
            <h1><i className="fa-solid fa-angles-right"></i>Projects / {projet.title} / Pictures of the project</h1>
            <Caroussel key={projet.id} pictures={projet.pictures} />
            <div className='infos-projets'>
                <div className="date-et-github">
                    <h2>{projet.title}</h2>
                    <div className='ligne'></div>
                    <p><span>Date : </span>{projet.date}</p>
                    {projet.link.github === "" ? "" : <p><span>Github : </span><a href={projet.link.github} target='_blank' rel='noreferrer'>This project is here</a></p>}
                    {projet.link.files === "" ? "" : <p><span>Files : </span><a href={projet.link.files} download="Files_of_the_project.rar" target='_blank' rel='noreferrer'>Download the files of the project here</a></p>}
                </div>
                <div className="description">
                    <h2>Description of the project : </h2>
                    <div className='ligne'></div>
                    <p>{projet.description}</p>
                </div>
            </div>
        </section>
    )
};

export default Projet;