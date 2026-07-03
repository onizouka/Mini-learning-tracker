import { useEffect, useState } from "react"
import type {CategoryInterface} from "../interfaces/CategoryInterface";

export default function getAllCategories() {
 const [categoriesList, setCategoriesList] = useState<CategoryInterface[]>([]);
 
 useEffect(() => {
  fetch('http://localhost:8080/api/categories')
  .then(res => res.json())
  .then((data: CategoryInterface[]) => { setCategoriesList(data); console.log();})
 }, []);
 
 return (
 <>
 <h1>Voici les catégories existantes</h1>
 <ul>
  {categoriesList.map((categoryItem) =>
   <li key={categoryItem.id}>
    <p>{categoryItem.name}</p>
    <p>{categoryItem.description}</p>
   </li>)}
 </ul>
 </>
 )
};