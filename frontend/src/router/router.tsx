import { Route, Routes } from "react-router";
import ResourcesList from "../components/ResourcesList"
import ResourceForm from "../components/ResourceForm";
import CategoriesList from "../components/CategoriesList";

export default function Router() {
 return (
  <Routes>
   <Route path="/" element={<ResourcesList/>}></Route>
   {/* <Route path="/resources/:id" element={}></Route> */}
   <Route path="/resources/new" element={<ResourceForm/>}></Route>
   <Route path="/categories" element={<CategoriesList/>}></Route>
   {/* <Route path="/categories/new" element={}></Route> */}
  </Routes>

 )
}