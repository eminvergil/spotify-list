import React, { useContext, useState } from "react";
import { AlbumContext } from "../context/albumContext";

export default function GetAlbums() {
  const [artist, setArtist] = useState("");
  const { setAlbums } = useContext(AlbumContext);

  let GetAlbums = async () => {
    let tokenres = await fetch("/api/spotify?token=true", {
      method: "POST",
    });

    let tokenResponse = await tokenres.json();

    let response = await fetch(
      `https://api.spotify.com/v1/search?type=album&include_external=audio&q=${artist}`,
      {
        headers: {
          Authorization: "Bearer " + tokenResponse.res.access_token,
          "Content-type": "application/json",
        },
      }
    );
    let data = await response.json();
    setAlbums(data.albums.items);
  };
  return (
    <div className="flex flex-col gap-10  p-5 justify-center items-center mx-auto">
      <input
        placeholder="artist name"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <button
        className="mx-3 my-2 p-2 rounded-xl bg-gray-700 hover:bg-gray-500 text-white text-xl"
        onClick={() => GetAlbums()}
      >
        Get Shows
      </button>
    </div>
  );
}
