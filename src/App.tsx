import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import axios from "axios";

const styles = {
  container: {
    maxWidth: 600,
    minWidth: 300,
    padding: 24,
    margin: "auto",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
  },
};
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.json-generator.com/templates/-xdNcNKYtTFG/data", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => setUsers(response.data))
      .catch((e) => alert(e));
  }, []);

  return (
    <div style={styles.container}>
      {currentUser ? (
        <UserDetails user={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <UserList users={users} setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
};

export default App;
