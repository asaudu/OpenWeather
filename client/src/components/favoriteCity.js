import { useEffect, useState } from "react";

const FavoriteCity = ({addCity}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setUsers(await response.json());
      //console.log("From the post ", data);
      // props.addStudent(data);
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <h2>Favorite Cities</h2>
      <ul className="favoriteCity">
        <li key={users.id}>{users.user_name} {users.favorite_city}</li>
      </ul>
    </div>
  );
};

export default FavoriteCity;
