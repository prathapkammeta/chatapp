import {createContext} from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
const UserContext=createContext({});

export function UserContextProvider({children}){
const [username,setUsername]=useState();
const[id,setId]=useState(null);
useEffect(()=>{
    axios.get('/profile').then(response=>{
        console.log(response.data);
        setId(response.data.userId);
        setUsername(response.data.username);
    })
},[]);
    return (
        <UserContext.Provider value={{username,setUsername,id,setId}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContext;