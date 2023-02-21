
import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';
import CategoryMenu from './components/category-menu/category-menu.component';
const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "Posters",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "Prints",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "Sticker",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "T-Shirts",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "Notebooks",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

  return (
    <div>
    <CategoryMenu categories={categories}/>
    </div>
    
  );
}

export default App;
