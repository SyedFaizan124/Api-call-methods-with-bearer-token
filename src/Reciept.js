import React, { useEffect, useState } from 'react';
import './App.css';

const Reciept = () => {

  const token = "eyJraWQiOiJscGNySEVcL1wvREJDWjdwS2V4WGNUUFlrT2FuSVh6aUFYbXVMdFNONkZIU0E9IiwiYWxnIjoiUlMyNTYifQ.ewogICJzdWIiOiAiOTI5MjhmM2YtODczMC00Y2UwLWJjOTMtN2MwZDFjYTNjZDRkIiwKICAiYXVkIjogIjJsOGl2dXVzbG01MnZwN2Y5YTBlbW1odTEyIiwKICAiZW1haWxfdmVyaWZpZWQiOiBmYWxzZSwKICAiZXZlbnRfaWQiOiAiMzhlNmMwZjgtMTQxYy00OWY2LWEyOWMtMjQwOTc4ZmZjODgxIiwKICAidG9rZW5fdXNlIjogImlkIiwKICAiYXV0aF90aW1lIjogMTY0NDc5MjY5MiwKICAiaXNzIjogImh0dHBzOi8vY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2FwLXNvdXRoLTFfUm9zdFp4TW52IiwKICAicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjogdHJ1ZSwKICAiY29nbml0bzp1c2VybmFtZSI6ICIzOGU2YzBmOC0xNDFjLTQ5ZjYtYTI5Yy0yNDA5NzhmZmM4ODEiLAogICJleHAiOiAxNjQ0Nzk2MjkyLAogICJpYXQiOiAxNjQ0NzkyNjkyLAogICJlbWFpbCI6ICJtb3NpbkBnbWFpbC5jb20iLAogICJwaG9uZSI6ICIrOTE5MDk2NTUzMzQ4Igp9.JUeWiQky0SNpmWfLBQNPRwUzlT50qFzaRqjqFdM9F3XGOfoEggnyyIXetgs7-tjBMeEtHSWJh_kzBD2cD3UNZO6OaiZ1W3zBkv2-FMsOEztZif-t5aWnEyrf0x_p2d9RTn-3rCnsKbDjcAvC3t-zlVK2iCXuXyQ6YIa2WNsXR6H59c36f0wZ39mscgGpqJsTmNBWZHel91j2GT2QWW1_IG4pny9L4QPDgTRJxoWClzHwCNdUkjTe-v_X3zpZCkPKV8dIenHciCfVFfiwtK-P-oCT3CUiYYCwEAHEZgZY2ZDGNiO9-LKp5HBqT268ydtt3uJFFpUw1j5CoxpE2NKeSQ";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://ezygen-technology-bluebill-prod-env.ap-south-1.elasticbeanstalk.com/ezygentechnology/onlineOrder/getShopkeeperOrderDetails/164583307793567', {
      method: "GET",
      headers: {
        "content-type": 'application/json',
        "accept": 'application/json',
        "Authorization": `Bearer ${token}`

      }
    }).then(result => result.json()).then(resp => setData(resp));
  }, []);
  console.warn(data);


  return (
    // <div>{JSON.stringify(result)}</div>
    <div>
      <h1>API Call using Get Method!</h1>
      <div className="style">
        <table border={"1px solid black"}>
          <tr>
            <td>OrderID</td>
            <td>Order-Quantity</td>
            <td>Product-Name</td>
            <td>Unit-ID</td>
            <td>Product-ID</td>
            <td>Selling-Price</td>
          </tr>
          {
            data.map((item) =>
              <tr>
                <td>{item.orderId}</td>
                <td>{item.orderQuantity}</td>
                <td>{item.productName}</td>
                <td>{item.unitId}</td>
                <td>{item.productId}</td>
                <td>{item.sellingPrice}</td>
              </tr>

            )
          }
        </table>
      </div>
    </div>

  );
}
export default Reciept;