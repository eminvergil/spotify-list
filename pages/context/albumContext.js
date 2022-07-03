import { createContext, useState } from "react";

export const AlbumContext = createContext();

export default function AlbumProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  return (
    <AlbumContext.Provider value={{ albums, setAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
}
