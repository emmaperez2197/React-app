import { useState } from 'react'
import AddCategories from './components/AddCategories/AddCategories';
import GifGrid from './components/GifGrid/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([''])


  const onAddCategory = (newCategory)=>{

    if (categories.includes(newCategory)) return; 
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategories 
      // onAddCategory={setCategories}
        onNewCategory =  { (value) => onAddCategory(value) }
      />

      {/*--- Lista ---*/}
      <ul>
        {
          categories.map(category => {
            return (
 
              <GifGrid key={category} category={category}/>
            )
          })
        }
      </ul>
    </>
  );
}

export default GifExpertApp;