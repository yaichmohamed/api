import React,{useEffect,useState} from 'react'
import axios from 'axios'
function UserList() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((Response)=>{setData(Response.data)
      console.log(Response)
      })
    },[] )
  return (
    <div>
      {data.map((e)=>(<div> name is:{e.name}</div>))}
    </div>
  )
}

export default UserList
