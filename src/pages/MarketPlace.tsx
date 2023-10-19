import React,{useState, useEffect} from 'react'
import { getAllItems } from '../api/routes';
import Item from '../components/Item'
// import Navbar from '../components/Navbar';
// import Header from '../components/Header';

interface Props{
    lighting?:string;
    furniture?:string;
    decor?:string;
    linens?:string;
}

interface Item {
  name:string;
  image: string;
  id: number;
  category: string;
  price: string;
  color: string;
  description:string;
  tags:string;
}

interface ApiResponse {
  results: Item[];
}

const MarketPlace: React.FC<Props> = ({lighting, furniture, decor, linens}) => {
  const [items, setItems] = useState<Item[]>([])
  const [type, setType] = useState<string | null>(null)
  const [filterItem, setFilter] = useState<Item[]>([])

  useEffect(() => {
    const getItems = async() => {
      const data: ApiResponse = await getAllItems();
      setItems(data.results);
    };
    getItems();
  }, []);

  useEffect(()=> {
    let typeValue:string = '';
  
    if (lighting) typeValue = 'Lighting';
    if (furniture) typeValue = 'Furniture';
    if (decor) typeValue = 'Decor';
    if (linens) typeValue = 'Linens';
    
    setType(typeValue);

  }, [lighting, decor, furniture, linens])

  useEffect(() => {
    if (type) {
      let filteredArray = items.filter((item) => item.category === type);
      setFilter(filteredArray)
    }else{
      setFilter(items)
    }
  }, [type, items]);

  return (
    <div>
      <h1>MarketPlace</h1>
      <div>
        {filterItem.map((item, index) => (
          <Item key={index} id={item.id} image={item.image} name={item.name} color={item.color} price={item.price} description={item.description} category={item.category} tags={item.tags} />
        ))}
      </div>
    </div>
  )
}

export default MarketPlace;