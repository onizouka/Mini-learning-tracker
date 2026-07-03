
import { useEffect, useState } from "react";

interface CategoryInterface {
  id: string;
  name: string;
  description: string;
}

function CategoryList() {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
        .then((response) => response.json())
        .then((data) => {
          setCategories(data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  return (
      <>
        <h1>Liste des catégories</h1>

        {categories.length === 0 ? (
            <p>Aucune catégorie trouvée</p>
        ) : (
            <ul>
              {categories.map((category) => (
                  <li key={category.id}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </li>
              ))}
            </ul>
        )}
      </>
  );
}

export default CategoryList;