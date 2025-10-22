import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <User name={"subhas" }/>

      <UserClass  name={"subhas"} location ="Mudalagi" />
    </div>
  )
}

export default About
