import React from "react";
import objects from "../data/objects.json";

function ObjectList() {
  return (
    <div>
      <h2>Đối tượng học lập trình</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {objects.map((obj) => (
          <div key={obj.id} style={{ border: "1px solid #ccc", padding: "1rem", width: "30%" }}>
            <img src={obj.image} alt={obj.title} style={{ width: "100%" }} />
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ObjectList;
