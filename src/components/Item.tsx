import React from 'react'
import AddToCartButton from './AddToCartButton'

// interface ItemProps {
//   id: number;
//   imageUrl: string;
//   name: string;
//   color: string;
//   price: number;
//   category: string;
// }

// const Item: React.FC<ItemProps> = ({ id, imageUrl, name, color, price, category }) => {
//   return (
//     <div>
//       <div>
//         <img src={imageUrl} alt={name}></img>
//         <a href='/signin'>
//           <h3>{name}</h3>
//           <div>${price}</div>
//         </a>
//       </div>
//       <button>Add To Cart</button>
//     </div>
//   )
// }
const Item: React.FC = () => {
  return (
    <div>
      <div>
        <img src='' alt='Test'></img>
        <a href='/signin'>
          <h3>Linen</h3>
          <div>$45</div>
        </a>
      </div>
      <AddToCartButton/>
    </div>
  )
}

export default Item