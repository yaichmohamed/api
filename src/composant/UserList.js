import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  // State variable to hold the data retrieved from the API
  const [data, setData] = useState([]);

  // useEffect hook used to perform side effects (API call) on component mount
  useEffect(() => {
    // Axios GET request to retrieve data from the specified URL
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Update the state with the retrieved data
        setData(response.data);
        console.log(response);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {/* Map over the data array and render the name for each user */}
      {data.map((e) => (
        <div> name is: {e.name} </div>
      ))}
    </div>
  );
}

export default UserList;
