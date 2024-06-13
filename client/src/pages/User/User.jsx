import './User.css'
const User = ({user}) => {
    
    return(
        <section className="user-card">
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            
        </section>
    )
}

export default User