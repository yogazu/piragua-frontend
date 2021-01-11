import React from "react"


const UserCard = ({id,name, username, email}) => (

    <article className="card" key={id}>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center"> {name}</h3>
            <di className="s-main-center">{username}</di>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="https://ed.team/cursos/ingles-gramatica">{`$ ${email}`} </a>
            </div>
        </div>
    </article>
)

export default UserCard