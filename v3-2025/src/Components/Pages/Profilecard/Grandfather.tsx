import React from 'react'
import Father from './Father'

const message:string = "Hej barnbarnet!";
const Grandfather: React.FC = () => {
  return (
    <Father message={message}/>
  )
}

export default Grandfather