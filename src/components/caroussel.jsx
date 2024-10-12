import React, { useState } from 'react';

function Caroussel(props) {
    const [imgIndex, setImgIndex] = useState(0);
    function prevImg (){
        setImgIndex(imgIndex-1);
        if (imgIndex === 0) {
            setImgIndex(props.pictures.length-1);
        }
    }

    function nextImg (){
        setImgIndex(imgIndex+1);
        if (imgIndex === props.pictures.length-1) {
            setImgIndex(0);
        }
    }
    return (
        <div className="caroussel-pitures">
           <div className='carroussel-container' style={{transform:`translateX(-${imgIndex*100}%)`}}>
                {props.pictures.map((picture, i) =>
                    <img key={i} className='pictures' src={picture} alt="apperçus du projet" />
                )}
            </div>
            <div onClick={prevImg} className="fleche-precedent">{props.pictures.length > 1 ? <i className="fa-solid fa-chevron-left"></i> : ""}</div>
            <p className="pagination">{props.pictures.length > 1 ? `${imgIndex+1}/${props.pictures.length}` : ""}</p>
            <div onClick={nextImg} className="fleche-suivant">{props.pictures.length > 1 ? <i className="fa-solid fa-chevron-right"></i> : ""}</div>
        </div>
    );
}

export default Caroussel