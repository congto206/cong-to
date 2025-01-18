import React, { useEffect, useState } from 'react';

function SubjectList() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('/subjects.json')
      .then(response => response.json())
      .then(data => setSubjects(data));
  }, []);

  return (
    <div>
      <h2>Subjects</h2>
      <ul>
        {subjects.map(subject => (
          <li key={subject.id}>
            <h3>{subject.subject}</h3>
            <p>{subject.description}</p>
            <img src={subject.image} alt={subject.subject} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
