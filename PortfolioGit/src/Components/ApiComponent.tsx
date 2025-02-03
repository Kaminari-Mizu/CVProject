import { useState, useEffect } from 'react';
import axios from 'axios';

interface keyValuePair {
    key: string;
    value: string;
}

const API_BASE_URL = 'http://localhost:5260';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
   
});
 

function Api() {
  const [data, setData] = useState <keyValuePair[]> ([]);

  useEffect(() => {
    api.get("/HelloWorld")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


    
  
  return (
    <div>
     {data.map((item, index) => (
        <p key={index}>
        {item.key}:{item.value}
        </p>
      ))}
    </div>
  );
}
export default Api;