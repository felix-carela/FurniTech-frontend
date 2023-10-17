import React from 'react'
import Navbar from '../components/Navbar';

interface Props{
    lighting?:boolean;
    furniture?:boolean;
    decor?:boolean;
    linens?:boolean;
}

const MarketPlace: React.FC<Props> = ({lighting, furniture, decor, linens}) => {


  return (
    <div>
      <h1>MarketPlace</h1>
    </div>
  )
}

export default MarketPlace;