import React from "react"
import withLoader from "../hoc/withLoader"
import UserCard from "../molecules/UserCard"


const UsersGrid = ({users}) => (
    <div className="ed-grid">
        <h1>usuarios</h1>
        <div className ="ed-grid s-grid-2 m-grid-3 l-grid-4">
            { 
                users.map(u => 
                ( <UserCard
                    Key = {u.id}
                    id ={u.id}
                    name={u.name} 
                    username={u.username} 
                    email={u.email}
                    />
                ))
            }
        </div>
    </div>
)


export default withLoader("users") (UsersGrid) 