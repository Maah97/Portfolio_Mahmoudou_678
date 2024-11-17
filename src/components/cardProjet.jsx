import { React, useContext } from "react";
import { ThemeContext } from "../context/theme";
import { HashLink } from "react-router-hash-link";
import { useEffect, useRef, useMemo } from "react";
import MongoDB from '../assets/mongodb2.svg';
import Lighthouse from '../assets/lighthouse2.svg'
import Notion from '../assets/notion-logo.svg'
import { useTranslation } from "react-i18next";

function CardProjet(props) {
    const { t } = useTranslation();
    const {theme} = useContext(ThemeContext);
    const containRef = useRef(null);
    const ratio = 0.1
    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: "0px",
            threshold: ratio
        };
    }, [])
     
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
                entry.target.style.opacity = 1;
                entry.target.classList.add('visible-card-projet');
                observer.unobserve(entry.target);
            }
        });
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        let contain = containRef.current
        if (containRef.current) {
            observer.observe(contain);
        }
        return () => {
            observer.unobserve(contain);
        }
    }, [containRef, options]);
    return (
        <HashLink ref={containRef} to={'/projects/'+ props.id + '#project'} className={theme==='light' ? "card-projet" : "card-projet dark visible"}>
            <div className='conteneur-card-projet'>
                <img src={props.imgCover} alt="site booki" className='img-cover' />
                <p>{props.titre}</p>
                <div className="ligne"></div>
                <p>{props.category}</p>
                <div className='technos'>
                    {
                        props.technos.map((techno,i) => (
                            <div key={i} className='techno'>
                                {techno === "MongoDB" ? <img src={MongoDB} alt="logo MongoDB" /> : techno === "Lighthouse" ? <img src={Lighthouse} alt="logo MongoDB" /> : techno === "Notion" ? <img src={Notion} alt="logo MongoDB" />
                                : <i className={`fa-brands fa-${techno}`}></i>}
                                <p>{techno}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="txt-hover"><p>{t("cardProjet")}</p></div>
        </HashLink>
    )
};

export default CardProjet;