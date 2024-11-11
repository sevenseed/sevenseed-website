import React from 'react'
import Introduction from './Introduction'
import CTA from './CTA'
import Challenges from './Challenges'
import Why from './Why'
import Overcoming from './Overcoming'
import DynamicMarket from './DynamicMarket'

const page = () => {
  return (
    <div>
      <Introduction/>
      <Challenges/>
      <Why/>
      <Overcoming/>
      <DynamicMarket/>
      <CTA/>
    </div>
  )
}

export default page