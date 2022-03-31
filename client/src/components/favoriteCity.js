import { useEffect, useState } from "react";

const FavoriteCity = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
        const response = await fetch("http://localhost:8080/api/users", {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     })
         setUsers(await response.json());
         //console.log("From the post ", data);
         // props.addStudent(data);
   };
   getUsers();
  }, []);

  console.log(users);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=02cfcf682f2bd37a2b563392cc9c6d48&units=imperial`);
//       if (componentMounted) {
//         setData(await response.json());
//         console.log(data);
//       }
//       return () => {
//         componentMounted = false;
//       };
//     };
//     fetchWeather();
//   }, [search]);
   
  
  return (
    <ul className="favoriteCity">
      <li>Dallas</li>
    </ul>
  );
};

export default FavoriteCity;
