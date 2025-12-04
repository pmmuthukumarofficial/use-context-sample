import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/MyContext";



export default function ContactPage() {

  const [loggedIn, setLoggedIn] = useState(false)
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

  }, [])

  return (
    <div>
      <h1>Contact Page</h1>      
      {
        
        loggedIn && <p>Current Name: {user.username}</p>
      }
    </div>
  );
}
