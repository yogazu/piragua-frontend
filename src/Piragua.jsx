import React from 'react';

const Piragua = () => (

    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/small/b1158d37-35f6-49ec-a151-e5594ccea21d.jpg" alt="curso ingles" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/71b66581-b0b4-4c29-b29e-023da3dac278.jpg" alt="profe juan" />
                </div>
                </div>
                <span className="small">Alexys Lozada</span>
            </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://ed.team/cursos/ingles-gramatica">$ 20USD</a>
            </div>
        </div>
    </article>

)

export default Piragua;
