import { Link } from 'react-router-dom';
import MongoDB from '../assets/mongodb.svg';
import Lighthouse from '../assets/lighthouse.svg'
import Notion from '../assets/notion-logo.svg'

function CardProjet(props) {
    return (
        <Link to={'/projet/'+ props.id} className="card-projet">
            <div className='conteneur-card-projet'>
                <img src={props.imgCover} alt="site booki" className='img-cover' />
                <p>{props.titre}</p>
                <div className="ligne"></div>
                <p>{props.categorie}</p>
                <div className='technos'>
                    {
                        props.technos.map((techno) => (
                            <div className='techno'>
                                {techno === "MongoDB" ? <img src={MongoDB} alt="logo MongoDB" /> : techno === "Lighthouse" ? <img src={Lighthouse} alt="logo MongoDB" /> : techno === "Notion" ? <img src={Notion} alt="logo MongoDB" />
                                : <i className={`fa-brands fa-${techno}`}></i>}
                                <p>{techno}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="txt-hover"><p>Voir le projet</p></div>
        </Link>
    )
};

export default CardProjet;