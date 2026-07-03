import { useState} from "react";

function CategoryForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function cleanForm() {
    setName("");
    setDescription("");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  const category = {
    name,
    description,
  };

  await fetch("http://localhost:8080/api/categories/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category)
  });

  alert("categorie créé");

  cleanForm();
};

return(
<>

    <h1>Créer une catégorie</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nom de la catégorie</label>
      <input
      id="name"
      name="name"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        />
      <button type="submit">
        Créer
      </button>
    </form>

</>
);
}
export default CategoryForm;