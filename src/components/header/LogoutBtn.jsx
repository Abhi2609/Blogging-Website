import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from "../../store/authSlice"

function LogoutBtn() {
  const dispatch = useDispatch()
  
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button className='inline-block hover:bg-blue-100 duration-200 py-2 px-6 rounded-full'>Logout</button>
  )
}

export default LogoutBtn
