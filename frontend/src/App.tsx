import './App.css'
import { useEffect, useState} from "react";
import type {ResourceInterface} from "./interfaces/ResourceInterface.ts";

function App() {

  const [resourcesList, setResourcesList] = useState<ResourceInterface[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/resources')
    .then(res => res.json())
    .then((data: ResourceInterface[] )=> {setResourcesList(data); console.log(data)})

  }, []);

  return (
    <>
     <h1>bonjour</h1>
      <ul>
        {
        resourcesList.map((resourceItem) =>
                <li key={resourceItem.id}>
                  <div>{resourceItem.title}</div>
                </li>
          )
        }


      </ul>
    </>
  )
}

export default App
