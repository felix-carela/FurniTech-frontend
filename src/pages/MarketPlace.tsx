import React,{useState, useEffect} from 'react'
import { getAllItems } from '../api/routes';
// import Navbar from '../components/Navbar';
// import Header from '../components/Header';

interface Props{
    lighting?:boolean;
    furniture?:boolean;
    decor?:boolean;
    linens?:boolean;
}

const MarketPlace: React.FC<Props> = ({lighting, furniture, decor, linens}) => {
  const [items, setItems] = useState([])

  useEffect(()=> {
    const getItems = async() => {
      const data = await getAllItems()
      setItems(data)
    };
    getItems()
  }, [])

  return (
    <div>
      <h1>MarketPlace</h1>
    </div>
  )
}

export default MarketPlace;