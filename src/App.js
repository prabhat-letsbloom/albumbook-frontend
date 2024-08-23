import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import UpdateList from "./UpdateList";
import "./App.css";
import AddAlbum from "./components/AddAlbum";
import AlbumList from "./components/AlbumList";
import GetById from "./components/GetById";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AlbumList />} />
          <Route path="/add" element={<AddAlbum />} />
          {/* <Route path="/update" element={<UpdateList />} /> */}
          <Route path="/getbyid" element={<GetById />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
