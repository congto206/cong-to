import React from "react";
import subjects from "../data/subjects.json";

function SubjectList() {
  return (
    <div>
      <h2>Chương trình học</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {subjects.map((subj) => (
          <div key={subj.id} style={{ border: "1px solid #ccc", padding: "1rem", width: "30%" }}>
            <img src={subj.image} alt={subj.subject} style={{ width: "100%" }} />
            <h3>{subj.subject}</h3>
            <p>{subj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectList;

