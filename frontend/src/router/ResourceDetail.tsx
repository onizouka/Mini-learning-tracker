import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ResourceDetail() {
  const { id } = useParams();
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/resources/${id}`)
        .then((response) => response.json())
        .then((data) => setResource(data));
  }, [id]);

  if (!resource) {
    return <p>Chargement...</p>;
  }

  return (
      <>
      <a>
      <h1>{resource.title}</h1>
      <p>{resource.description}</p>
      <p>{resource.type}</p>
      <p>{resource.status}</p>

      {resource.url}
      Consulter la ressource
      </a>
</>
);
}

export default ResourceDetail;