import { useState } from "react";

const Form = (props) => {
    const [user, setUser] = useState({
        user_name: "",
        favorite_city: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const user_name = event.target.value;
        setUser((user) => ({ ...user, user_name }));

    }

    const handleCityNameChange = (event) => {
        const favorite_city = event.target.value;
        setUser((user) => ({ ...user, favorite_city }));

    }

    //A function to handle the post request
    const postUser = (newUser) => {
        return fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newUser)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addUser(data);
      
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postUser(user);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>New User</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Your Name"
                    required
                    value={user.user_name}
                    onChange={handleNameChange}

                />
                <br/>
                <label>Favorite City</label>
                <input
                    type="text"
                    id="add-favorite-city"
                    placeholder="City Name"
                    required
                    value={user.favorite_city}
                    onChange={handleCityNameChange}

                />
                <button type="submit">Add City</button>
            </fieldset>
            
        </form>
    );
};

export default Form;