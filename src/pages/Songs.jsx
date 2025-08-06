import style from "./Pages.module.css";
import { SongCard } from "../components/song/SongCard";

export const Songs = () => {
  const songs = [
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/dbbde1014cda9b101412a8e27add0ad2/1900x1900-000000-80-0-0.jpg",
      artist: "Twenty One Pilots",
      artistType: "banda",
      songName: "Polarize",
      yearReleased: "2015",
      tag: "alternativo",
    },
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/0x1900-000000-80-0-0.jpg",
      artist: "Bad Bunny",
      artistType: "solista",
      songName: "Otro atardecer",
      yearReleased: "2022",
      tag: "reggue",
    },
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/e73a2afb469cd0f06777b24b156d3f82/1900x1900-000000-80-0-0.jpg",
      artist: "Tainy",
      artistType: "solista",
      songName: "Todavia",
      yearReleased: "2023",
      tag: "reggue",
    },
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/dbbde1014cda9b101412a8e27add0ad2/1900x1900-000000-80-0-0.jpg",
      artist: "Twenty One Pilots",
      artistType: "banda",
      songName: "Doubt",
      yearReleased: "2015",
      tag: "alternativo",
    },
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/0x1900-000000-80-0-0.jpg",
      artist: "Bad Bunny",
      artistType: "solista",
      songName: "Efecto",
      yearReleased: "2022",
      tag: "reggue",
    },
    {
      cover:
        "https://cdn-images.dzcdn.net/images/cover/e73a2afb469cd0f06777b24b156d3f82/1900x1900-000000-80-0-0.jpg",
      artist: "Tainy",
      artistType: "solista",
      songName: "PARANORMAL",
      yearReleased: "2023",
      tag: "reggue",
    },
  ];
  return (
    <>
      <div className={style.container}>
        {songs.map((song, key) => {
          return (
            <SongCard
              key={key}
              cover={song.cover}
              artist={song.artist}
              artistType={song.artistType}
              songName={song.songName}
              yearReleased={song.yearReleased}
              tag={song.tag}
            />
          );
        })}
      </div>
    </>
  );
};
