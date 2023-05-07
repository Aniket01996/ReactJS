import React from 'react'
import Login from './Login'
import Logout from './Logout'

const CheckUser = ({user}) => {
  // const user = true
    if(user===true){
      return <Login />
    }
    else {
      return <Logout />
    }
}
export default CheckUser


