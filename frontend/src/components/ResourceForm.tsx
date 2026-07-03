import {useEffect, useState} from "react";
import * as React from "react";

function ResourceForm(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!type.trim()) {
      setErrorMessage('Le champ ne peut pas rester vide');
      return;
    }

    if (!validateType(type)) {
      setErrorMessage('Indiquer un type valide');
    } else {
      setErrorMessage('');
    }
    if( !validateUrl(url)){
      setErrorMessage("Veuillez indiquer une URL valide");
      return;
    }
  }, [type]);

  function cleanForm() {
    setTitle("");
    setDescription("");
    setUrl("");
    setType("");
    setStatus("");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resource = {
      title,
      description,
      url,
      type,
      status
    };

    if (!title || !url || !type || !status) {
      setErrorMessage("Tous les champs obligatoires doivent être remplis");
      return;
    }
    await fetch('http://localhost:8080/api/resources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resource)
    });

    alert('Ressource créée');

    cleanForm();
  };

  function validateUrl(url: string) {
    const regex = /^([\w-]+\.)+[\w-]{2,}(\/.*)?$/gm;
    return (url.match(regex));
  }

  function validateType (type: string):boolean {
    const validTypes = [
      'ARTICLE',
      'VIDEO',
      'DOCUMENTATION',
      'COURSE',
      'OTHER'
    ];
    return validTypes.includes(type.toUpperCase());
  }





  return(
      <>
        <div className="App">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e)=> {
                setTitle(e.target.value);
              }}
              />

            <label htmlFor="description">Description:</label>
            <input
            id="description"
            type="text"
            value={description}
            onChange={(e)=> {setDescription(e.target.value);
            }}
            />

            <label htmlFor="url">URL:</label>
            <input
            id="url"
            type="text"
            value={url}
            onChange={(e)=> {setUrl(e.target.value);
            }}
            />

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
              <option value="">Choisir...</option>
              <option value="ARTICLE">ARTICLE</option>
              <option value="VIDEO">VIDEO</option>
              <option value="DOCUMENTATION">DOCUMENTATION</option>
              <option value="COURSE">COURSE</option>
              <option value="OTHER">OTHER</option>
            </select>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Choisir...</option>
              <option value="TODO">TODO</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="DONE">DONE</option>
            </select>
            {errorMessage && <div style={{color:'red'}}>{errorMessage}</div>}
            <button type="submit">Submit</button>

          </form>

        </div>
          </>
  )



}
export default ResourceForm;