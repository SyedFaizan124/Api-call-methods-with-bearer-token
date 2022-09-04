import React, { useEffect, useState } from 'react';

function Api_get() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://mocki.io/v1/646d6db8-76fa-48e7-bc9c-a3abbe75d6a0").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        })
      })

  }, [])
  console.warn(data)

  return (
    <div>
      <h1>API Call using Get Method!</h1>
      <table border={"1px"}>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {
          data.map((item) => 
            <tr>
              <td>{item.userId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
            </tr>

          )

        }
      </table>
    </div>
  );
}

export default Api_get;
