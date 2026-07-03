import { useEffect, useState} from "react";
import type { ResourceInterface } from "../interfaces/ResourceInterface";
import {Link} from "react-router";

export default function getAllResources() {
  const [resourcesList, setResourcesList] = useState<ResourceInterface[]>([]);
  const [statusFilter, setStatusFilter] = useState();
  const [typeFilter, setTypeFilter] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/api/resources')
        .then(res => res.json())
        .then((data: ResourceInterface[]) => {
          setResourcesList(data);
          console.log(data)
        })
  }, []);

const filteredResources = resourcesList.filter((resource) => {
  const statusMatch = !statusFilter || resource.status === statusFilter;

  const typeMatch = !typeFilter || resource.type === typeFilter;

  return statusMatch && typeMatch;
});

 return (
  <>
   <h1>Voici les ressources disponibles</h1>

    <label for="ressource-statut">Tri par statut :</label>
    <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}>
      <option value="">Tous les statuts</option>
      <option value="TODO">TODO</option>
      <option value="IN_PROGRESS">IN_PROGRESS</option>
      <option value="DONE">DONE</option>
    </select>

    <label for="ressource-type">Tri par type de ressource :</label>
    <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}>
      <option value="">Tous les types</option>
      <option value="ARTICLE">ARTICLE</option>
      <option value="VIDEO">VIDEO</option>
      <option value="DOCUMENTATION">DOCUMENTATION</option>
      <option value="COURSE">COURSE</option>
      <option value="OTHER">OTHER</option>
    </select>

    <ul>
    {filteredResources.map((resourceItem) =>
         <li key={resourceItem.id}>
           <Link to={`/resources/${resourceItem.id}`}>
           <h2>{resourceItem.title}</h2>
           </Link>
           <p>Status : {resourceItem.status}</p>
           <p>Support : {resourceItem.type}</p>
         </li>
     )
    }
   </ul>
  </>
 )
}