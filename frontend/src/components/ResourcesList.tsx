import { useEffect, useState } from "react";
import type { ResourceInterface } from "../interfaces/ResourceInterface";

export default function getAllResources() {
 const [resourcesList, setResourcesList] = useState<ResourceInterface[]>([]);

 useEffect(() => {
  fetch('http://localhost:8080/api/resources')
   .then(res => res.json())
   .then((data: ResourceInterface[]) => { setResourcesList(data); console.log(data) })

 }, []);

 return (
  <>
   <h1>Voici les ressources disponibles</h1>
   <ul>
    {
     resourcesList.map((resourceItem) =>
      <li key={resourceItem.id}>
       <h2>{resourceItem.title}</h2>
       <p>{resourceItem.description}</p>
       <p>{resourceItem.status}</p>
       <p>{resourceItem.type}</p>
       <p>{resourceItem.url}</p>
      </li>
     )
    }
   </ul>
  </>
 )
}