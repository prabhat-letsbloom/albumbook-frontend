import React, { useState } from "react";
import axios from "axios";

const AddAlbum = () => {
  const [album, setAlbum] = useState({ title: "", artist: "", price: Number });

  const handleChange = (e) => {
    const value =
      e.target.name === "price" ? parseFloat(e.target.value) : e.target.value;
    setAlbum({ ...album, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/albums", album)
      .then(() => {
        setAlbum({ title: "", artist: "", price: "" });
      })
      .catch((error) => console.error("Error adding album:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Album</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={album.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Artist:</label>
        <input
          type="text"
          name="artist"
          value={album.artist}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={album.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Album</button>
    </form>
  );
};

export default AddAlbum;
