import React from 'react'
import Image from './image';
import About from './About';

const name = 'Ada Lovelace';
const Ada: React.FC = () => {
  return (
    <>
      <h2>{name}</h2>
      <Image 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/417px-Ada_Lovelace_portrait.jpg?20130907213703"
      alt="Ada Lovelace" 
      />

      <About />
    </>
  )
}

export default Ada