import React from 'react'
import Navbar from '../components/Navbar';

interface Props{
    lighting?:boolean;
    furniture?:boolean;
    decor?:boolean;
    linen?:boolean;
}

const MarketPlace: React.FC<Props> = ({lighting, furniture, decor, linen}) => {


  return (
    <div>MarketPlace</div>
  )
}

export default MarketPlace;