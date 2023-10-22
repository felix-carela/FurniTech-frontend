import React, {useState, useEffect} from 'react'
import { useAuth } from '../context/AuthContext'

interface Show {
    show:boolean;
}

export default function NameChange({show}:Show) {
    
useState(()=> {

})

    const {username} = useAuth()
  return (
    <div className={show}><p>{username}</p></div>
  )
}
