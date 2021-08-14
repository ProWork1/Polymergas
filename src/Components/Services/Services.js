import React from 'react'
import Doc from './Sections/Doc/Doc'
import Home from './Sections/Home/Home'
import Sanatkor from './Sections/Sanatkor/Sanatkor'
import Saroy from './Sections/Saroy/Saroy'
import Taklifnoma from './Sections/Taklifnoma/Taklifnoma'
import Libos from './Sections/ToyLibos/Libos'
import Xizmat from './Sections/Xizmatar/Xizmat'

function Services() {
  return (
    <div className={'Services'} >
      <Home />
      <Xizmat />
      <Doc />
      <Saroy />
      <Sanatkor />
      <Libos />
      <Taklifnoma/>
    </div>
  )
}

export default Services
