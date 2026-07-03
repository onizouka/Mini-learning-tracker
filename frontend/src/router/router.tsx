import { Link, Route, Routes } from "react-router";

import ResourcesList from "../components/ResourcesList";
import ResourceForm from "../components/ResourceForm";
import ResourceDetail from "./ResourceDetail.tsx";
import CategoryList from "./CategoryList.tsx";
import CategoryForm from "./CategoryForm.tsx";


export default function Router() {
  return (
      <>
        <nav>
          <Link to="/">Ressources</Link>{" | "}
          <Link to="/resources/new">Ajouter une ressource</Link>{" | "}
          <Link to="/categories">Catégories</Link>{" | "}
          <Link to="/categories/new">Ajouter une catégorie</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ResourcesList />} />

          <Route
              path="/resources/new"
              element={<ResourceForm />}
          />

          <Route
              path="/resources/:id"
              element={<ResourceDetail />}
          />

          <Route
              path="/categories"
              element={<CategoryList />}
          />

          <Route
              path="/categories/new"
              element={<CategoryForm />}
          />
        </Routes>
      </>
  );
}