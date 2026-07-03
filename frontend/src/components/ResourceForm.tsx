import {useEffect, useState} from "react";
import * as React from "react";


function ResourceForm(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=> {
  if(!type || !status){
    setErrorMessage('le champ ne peut pas rester vite');
    return;
  }
  },[type, status]);

  const handleSubmit = (e:React.FormEvent)=> {
    e.preventDefault();
    if(!type || !status) {
      setErrorMessage("Please enter a valid input");
      return;
    }
  };

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

            <label htmlFor="type">Type:</label>
            <input
            id="type"
            type="text"
            value={type}
            onChange={(e)=> {setType(e.target.value);
            }}
            />

            <label htmlFor="status">Status:</label>
            <input
            id="status"
            type="text"
            value={status}
            onChange={(e)=> {setStatus(e.target.value);
            }}
            />
            {errorMessage && <div style={{color:'red'}}>{errorMessage}</div>}
            <button type="submit">Submit</button>

          </form>

        </div>
          </>
  )



}
export default ResourceForm;