import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = () => {
    axios
      .get("http://localhost:8080/albums")
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  };

  const deleteAlbum = (id) => {
    axios
      .delete(`http://localhost:8080/albums/${id}`)
      .then(() => {
        fetchAlbums();
      })
      .catch((error) => console.error("Error deleting album:", error));
  };

  return (
    <div>
      <h2>Album List</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id} className="album-item">
            <div>
              {" "}
              <span className="album-id">ID: {album.id}</span>
              <strong>{album.title}</strong> by {album.artist} - $
              {album.price.toFixed(2)}
            </div>

            <button
              className="delete-button"
              onClick={() => deleteAlbum(album.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
