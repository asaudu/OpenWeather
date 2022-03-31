import { useEffect, useState } from "react";

const FavoriteCity = () => {

  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       const response = await fetch("http://localhost:8080/api/users", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       setUsers(await response.json());
//       //console.log("From the post ", data);
//        props.addCity(data);
//     };
//     getUsers();
//   }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/users")
        .then((response) => response.json())
        .then(users => {
            setUsers(users)
        })
    }, []);

  console.log(users);

  return (
    <div>
      <h2>Favorite Cities</h2>
      <ul className="favoriteCity">
          {users.map((user) => (
            <li key={user.id}>Name: {user.user_name} City: {user.favorite_city}</li>
          ))}
          {/* <li key={users[3].id}>Hello Name:{users[3].user_name} City:{users[3].favorite_city}</li> */}
      </ul>
    </div>
  );
};

export default FavoriteCity;
