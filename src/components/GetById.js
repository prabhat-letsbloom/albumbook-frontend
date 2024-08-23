import React, { useState } from "react";
import axios from "axios";

const GetById = () => {
  const [id, setId] = useState("");
  const [album, setAlbum] = useState(null);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/albums/${id}`)
      .then((response) => setAlbum(response.data))
      .catch((error) => console.error("Error fetching album:", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Get Album by ID</h2>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={handleChange} required />
        </div>
        <button type="submit">Get Album</button>
      </form>
      {album && (
        <div>
          <h3>Album Details</h3>
          <p>
            <strong>Title:</strong> {album.title}
          </p>
          <p>
            <strong>Artist:</strong> {album.artist}
          </p>
          <p>
            <strong>Price:</strong> ${album.price.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetById;
