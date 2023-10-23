import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllItems } from '../api/routes';
import AddToCartButton from '../components/AddToCartButton';

interface Item {
  id: number;
  image: string;
  name: string;
  color: string;
  price: string;
  description: string;
  category: string;
  tags: string;
  quantity: number;
}

interface ApiResponse {
  results: Item[];
}

const Details: React.FC = () => {
  const [item, setItem] = useState<Item | null>(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const data: ApiResponse = await getAllItems();
      const foundItem = data.results.find((item) => item.id === parseInt(itemId || "", 10)); // Handle itemId being undefined
      setItem(foundItem || null); // Set item to null if not found
    };
    getItems();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details-page-container'>
      <div className='details-page-image-container'>
        <img className='details-image' src={item.image} alt={item.name} />
      </div>
      <div className='details-page-info-container'>
        <p className='details-name'>{item.name}</p>
        <p className='details-price'>Starting at ${item.price}</p> <br/>
        <p className='details-description'>{item.description}</p>
        <p className='details-color'><strong>Color:</strong> {item.color}</p>
        <p className='details-category'><strong>Category:</strong> {item.category}</p>
        <p className='details-tags'><strong>Tags:</strong> {item.tags}</p>
        <AddToCartButton item={item}/>
      </div>
    </div>
  );
};

export default Details;
