import { useEffect, useRef, useMemo, useContext } from "react";
import { LangContext } from "../context/langage";
import { ThemeContext } from "../context/theme";
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import photoProphile from '../assets/Photo-profil.jfif';
import React from "react";
import { HashLink } from "react-router-hash-link";

function Header() {
    const {lang} = useContext(LangContext);
    const {theme} = useContext(ThemeContext);
    const { t } = useTranslation();
    function AddClassActive() {
        const menu = document.querySelector('nav');
        menu.classList.toggle('active');
        document.addEventListener('click', (e) => {
            let isClickedInside = document.querySelector('.menu-hamburger').contains(e.target);
            if (!isClickedInside) {
                menu.classList.remove('active');
            }
        });
    }

    const containerRef = useRef(null);
    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: "0px",
            threshold: .1
        };
    }, [])
     
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.1) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0px)";
                entry.target.style.transition = "all 1s cubic-bezier(0.5, 0, 0, 1)";
                observer.unobserve(entry.target);
            }
        });
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        let contain = containerRef.current
        if (containerRef.current) {
            observer.observe(contain);
        }
        return () => {
            observer.unobserve(contain);
        }
    }, [containerRef, options]);

    return (
        <header className={theme==='light' ? "" : "dark visible"} ref={containerRef}>
            <div className='photo-et-nom'>
                <img src={photoProphile} alt="profil" />
                <p>MAHMOUDOU ABDOUL NGANIYYOU</p>
            </div>
            <nav>
                <NavLink onClick={AddClassActive} className='navigation' to="/">{t("headerlink.link1")}</NavLink>
                <HashLink onClick={AddClassActive}  className='navigation' to="/#about">{t("headerlink.link2")}</HashLink>
                <HashLink onClick={AddClassActive} style={lang === 'fr' ? {width: "130px"} : {}} className='navigation' to="/#skills">{t("headerlink.link3")}</HashLink>
                <HashLink onClick={AddClassActive}  className='navigation' to="/#projects">{t("headerlink.link4")}</HashLink>
                <HashLink onClick={AddClassActive}  className='navigation' to="/#contact">{t("headerlink.link5")}</HashLink>
            </nav>
            <div onClick={AddClassActive} className='menu-hamburger'>
                    <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    )
};

export default Header;