import React,{useState} from 'react';

const Api = () => {
    const [userId, setUserId]=useState("")
    const [title, setTitle]=useState("")
    const [body, setBody]=useState("")

    function saveUser()
    {
        console.warn((userId,title,body)); 
        let data=(userId,title,body)
        fetch("https://jsonplaceholder.typicode.com/posts",{
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
    <input type="text" name='userId'placeholder='userId' 
           value={userId}onChange={(e) => {setUserId(e.target.value)}}/><br/><br/>
           
    <input type="text" name='title'placeholder='title' 
           value={title} onChange={(e) => {setTitle(e.target.value)}}/><br/><br/>

    <input type="text" name='body'placeholder='body' 
           value={body} onChange={(e) => {setBody(e.target.value)}} /><br/><br/>

    <button type='button' onClick={saveUser}>Save New User</button>
      
    </div>
  )
}

export default Api;
