import React,{useEffect,useState} from 'react';

const Api_post = () => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [mobile, setMobile]=useState("")

    function saveUser()
    {
        //console.warn((name,email,mobile)); 
        let data=(name,email,mobile)
        fetch("https://48e51fb4-b3d4-4190-b597-ae1edb235314.mock.pstmn.io/01",{
            method:'POST',
            Headers:{
                'Accept':'appliction/json',
                'Content-type':'appliction/json'
            },
            body:JSON.stringify(data)
        }).then((result) => {
          //console.warn("result",result);
          result.json().then((resp)=>{
            console.warn("resp",resp);
          })
          
        })
        
    }
    
  return (
    <div>
    <input type="text" name='name'placeholder='Name' 
           value={name}onChange={(e) => {setName(e.target.value)}}/><br/><br/>
           
    <input type="email" name='email'placeholder='Email' 
           value={email} onChange={(e) => {setEmail(e.target.value)}}/><br/><br/>

    <input type="number" name='mobile'placeholder='Mobile No:' 
           value={mobile} onChange={(e) => {setMobile(e.target.value)}} /><br/><br/>

    <button type='button' onClick={saveUser}>Save New User</button>
      
    </div>
  )
}

export default Api_post;
