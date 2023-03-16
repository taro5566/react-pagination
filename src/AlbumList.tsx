import React from "react";
import "./AlbumList.css";
import Album from "./type";

type props = {
  albums: Album[];
  currentAlbums: Album[];
};

const AlbumList = (props: props) => {
  const { albums, currentAlbums } = props;
  return (
    <div className="albumGridWrapper">
      {currentAlbums.map((album) => (
        <div key={album.id}>
          <img src={album.url} alt="album" />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
