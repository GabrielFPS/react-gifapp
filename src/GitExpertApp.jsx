import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";
 
export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['Zelda']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  }

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} /> 

      {
        categories.map((category) => (<GifGrid key={category} category={category} />))
      }
    </>
  )
}
