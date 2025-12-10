import { useState } from "react";
import UserProfileCard from "./UserProfileCard";

export default function UserList(){

const [users, setUsers]= useState([
])

    return (
    <>
    {
      users.map((userObj)=>{
        return(
          <li key={userObj.id} style={{listStyle:'none'}} >
            <UserProfileCard user={userObj}/>
          </li>
        )
      })
    }
    </>
  );

}