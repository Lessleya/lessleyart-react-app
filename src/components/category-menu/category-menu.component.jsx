import './category-menu.styles.scss';
import CategoryItem from '../category-item/category-item.component';

import React from 'react'

export default function CategoryMenu({categories}) {
    
  return (
    <div className="categories-container">
        {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
      ))};
      
    </div>
  )
}
