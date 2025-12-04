import { useContext, useState } from "react";
import { UserContext } from "../components/MyContext";


export default function ProfilePage() {

  const { user, setUser } = useContext(UserContext);  
  const [loggingUser, setLoggingUser] = useState({})

  function handleChange(e){
    setLoggingUser({...loggingUser, [e.target.name]: e.target.value})
  }

  function loginCheck(e){
    e.preventDefault();
    console.log(loggingUser);
    // axios code to check the given user present or not
    // {
    //   username, password, email, mobile,
    // }
    setUser({
      "username" : loggingUser.username,
      "email" : loggingUser.email,
    })

    // code to set user data into session storage here
  }
  return (
    <>
      <div>
          <h1>Profile Page</h1>
          <p>Name : {user.username}</p>
          {/* <p>Email: {user.email}</p> */}
      </div>

      <div className="container w-50">
        <h4 className="text-center">Login</h4>
        <form action="" onSubmit={loginCheck}>
          <div className="form-group">
              <input type="text" onChange={handleChange} placeholder="Username" name="username" className="form-control" />
          </div>
          <div className="form-group">
              <input type="password" onChange={handleChange} placeholder="Password" name="password" className="form-control" />
          </div>
          <input type="submit" value="Login" className="btn btn-primary"/>
        </form>
      </div>
    
    </>
  );
}
