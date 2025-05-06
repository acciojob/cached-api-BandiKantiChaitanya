import React, { useEffect, useMemo, useState } from 'react'

function App() {
  let [users,setUsers]=useState([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response=>response.json())
  .then(data=>{
    setTimeout(()=>{
      setUsers(data)
      setLoading(false)
    },300)
  })
  .catch(err=>console.log('error occured',err))
  },[])
  
  const memorizedUser=useMemo(()=>users,[users])

  return (
    <div>
      {
        loading ?(
          <div>Loading...</div>
        ):(
          <ul>
      { 
        memorizedUser.map((user)=>(
          <div key={user.id}  style={{marginBottom:'20px'}} >
            <li><h4>{user.title}</h4></li>
            <dl>{user.body}</dl>
          </div>
        ))
      }
      </ul>
        )
      }
    </div>
  )
}

export default App