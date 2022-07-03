import { createContext, useState } from "react";

export const AlbumContext = createContext([]);

function AlbumProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  return (
    <AlbumContext.Provider value={{ albums, setAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
}

export default AlbumProvider;
