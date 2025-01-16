import React from 'react'
import ProfileCard from './ProfileCard'

interface FatherProps {
  message: string;
}

interface User {
  name: string
  age: string
  title: string
  email: string
}

const user: User = {
  name: 'Nicodemus Naveltuta',
  age: '47',
  title: 'vice ninja',
  email: 'nicokick@theoffice.net'
}
const Father: React.FC <FatherProps> = ({ message }) => {
  return (
    <ProfileCard message={message} user={user}/>
  )
}

export default Father