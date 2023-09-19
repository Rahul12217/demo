import './AllUsers.css'

const AllUsers = ({user}) => {
    return ( 
        <div className="users-page">
            <div className="user-card">
                <p1> <b>UserId</b>: {user.userId} </p1>
                <p2> <b>Username</b>: {user.name} </p2>
                <p3> <b>Email</b>: {user.email} </p3>
                <p4> <b>Password</b>: {user.password} </p4>
                <p> <b>Phone</b>: {user.phone} </p>
            </div>         
        </div>
     );
}
 
export default AllUsers;