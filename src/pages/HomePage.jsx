import { useContext } from "react";
import { UserContext } from "../components/MyContext";


export default function HomePage() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {user.username}!</p>
    </div>
  );
}
