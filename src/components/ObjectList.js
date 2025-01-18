import React, { useEffect, useState } from 'react';

function ObjectList() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch('/objects.json')
      .then(response => response.json())
      .then(data => setObjects(data));
  }, []);

  return (
    <div>
      <h2>Objects</h2>
      <ul>
        {objects.map(object => (
          <li key={object.id}>
            <h3>{object.title}</h3>
            <p>{object.description}</p>
            <img src={object.image} alt={object.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ObjectList;
