import React from 'react'
import AddToCartButton from './AddToCartButton'
  
  interface ItemProps {
    id: number;
    image: string;
    name: string;
    color: string;
    price: string;
    description: string;
    category: string;
    tags: string;
  }
  
  const Item: React.FC<ItemProps> = ({ id, image, name, color, price, description, category, tags }) => {
    return (
      <div className='item'>
          <div>
            <div className="item-image-container">
              <a href='/signin'><img className='item-image' src={image} alt={name}></img></a>
            </div>
            <div className='item-name-price'>
              <p className='item-name-price-title'>{name}</p>
              <p>${price}</p> <br />
              <AddToCartButton />
            </div>
          </div>
      </div>
    );
  };
  
  export default Item;