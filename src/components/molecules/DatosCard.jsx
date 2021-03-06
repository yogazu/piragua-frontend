import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"

const DatosCard = ({id,title,image,price,addDatoToCart})=> (


    
    <article className="card" key= {id}>
        
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to= {`/dato/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            {title}
            </h3>
    
            <div className="s-main-center">
                    <button className="button--ghost-alert button--tiny"
                    onClick ={() => addDatoToCart(id) }>
                        {`$ ${price}`} 
                    </button>
            </div>
        </div>
    </article>

)

DatosCard.propTypes = {
    id:    PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
}

DatosCard.defaultProps = {
    id    : 0,
    title : "Nada de titulo papa",
    image : "https://i.pinimg.com/474x/1e/88/84/1e8884e32df28572ee656c4c2e377c1b.jpg",
    price : "--"
   
}


const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({
    
})
export default  connect(mapStateToProps,mapDispatchToProps)  (DatosCard);
