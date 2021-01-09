import React from 'react';
import PropTypes from 'prop-types'



const Piragua = ({title,image,price})=> (

    <article className="card">
        
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt={title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            {title}
            </h3>
    
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://ed.team/cursos/ingles-gramatica">{`$ ${price}`} </a>
            </div>
        </div>
    </article>

)

Piragua.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string

}

Piragua.defaultProps = {
    title : "Nada de titulo papa",
    image : "https://i.pinimg.com/474x/1e/88/84/1e8884e32df28572ee656c4c2e377c1b.jpg",
    price : "--"
}

export default Piragua;
