import type { NextPage } from "next";
import GetAlbums from "./components/GetAlbums";
import List from "./components/List";
import AlbumProvider from "./context/albumContext";

const Home: NextPage = () => {
  return (
    <AlbumProvider>
      <div className="flex-1 mx-auto">
        <GetAlbums />
        <List />
      </div>
    </AlbumProvider>
  );
};

export default Home;
