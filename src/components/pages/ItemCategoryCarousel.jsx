import React from 'react'
import '../../assets/css/carousel.scss';
import Forme from '../../assets/images/shop-items/jacket-one.jfif';
import Jeans from '../../assets/images/shop-items/jeans.jfif';
import Tshirt from '../../assets/images/shop-items/t-shirt.jfif';
import Shirt from '../../assets/images/shop-items/shirt.jfif';
import Trousers from '../../assets/images/shop-items/trousers.jfif';

const categories = [
  { name: 'For Me', image: Forme },
  { name: 'Jeans', image: Jeans },
  { name: 'T-Shirts', image: Tshirt },
  { name: 'Shirts', image: Shirt },
  { name: 'Trousers', image: Trousers },
];

const ItemCategoryCarousel = () => {
  return (
    <div className="carousel-container">
      <button className="arrow">{'<'}</button>
      <div className="carousel-scroll">
        {categories.map((cat, index) => (
          <div key={index} className={`category-item ${index === 0 ? 'active' : ''}`}>
            <div className="circle-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
      <button className="arrow">{'>'}</button>
    </div>
  )
}

export default ItemCategoryCarousel
