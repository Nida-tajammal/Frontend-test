import React from 'react';
import {useLocation} from "react-router"

const Users = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className="user-detail">

      <div style={{paddingBottom:"20px"}}>User id: {location.state.id}</div>
    <div style={{paddingBottom:"20px"}}>User Name: {location.state.name}</div>
    <div style={{paddingBottom:"20px"}}>User Age: {location.state.age}</div>
    </div>
    

  )
}
export default Users