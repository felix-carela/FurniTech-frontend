import React from 'react'
import AddToCartButton from './AddToCartButton'

interface Item {
  id: number;
  image: string;
  name: string;
  color: string;
  price: string;
  description: string;
  category: string;
  tags: string;
  quantity:number;
}
  
  interface ItemProps {
    item:Item;
  }
  
  const Item: React.FC<ItemProps> = ({item}) => {
    return (
      <div>
        <div>
          <img src={item['image']} alt={item['name']}></img>
          <a href='/signin'>
            <h3>{item['name']}</h3>
            <div>${item['price']}</div>
          </a>
        </div>
        <AddToCartButton item={item}/>
      </div>
    );
  };
  
  export default Item;