import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserContext, UserProvider } from "./components/MyContext";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import { useContext } from "react";


export default function App() {

  const {user, setUser} = useContext(UserContext);

  function logout(){
    setUser({})
    // here remove user data from session storage
    
  }

  return (
   
      <Router>
       
        <nav style={{ display: "flex", gap: 20 }}>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>

          {
             (user && Object.keys(user).length > 0)  && <button className="btn btn-danger" onClick={logout}>Logout</button>
          }
        
          
        </nav>

       
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
      </Router>
    
  );
}
