import React from 'react'
import Image from '../Ada/image';
import './ProfileCard.css'

// Definiera typen för props
interface ProfileCardProps {
  user: {
    name: string
    age: string
    title: string
    email: string
  },
  message: string;
}


const ProfileCard: React.FC <ProfileCardProps>  = ({ user, message }) => {

  const {name, title} = user;

  return (
    <>
      <article>
        <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={name} />
        <h4>{name}</h4>
        <p>{title}</p>
      </article>
      <p className="message">{message}</p>
    </>
  )
}

export default ProfileCard