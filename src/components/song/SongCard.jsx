import { useState } from "react";
import style from "./SongCard.module.css";
import { GoHeart, GoHeartFill } from "react-icons/go";

export const SongCard = ({
  cover,
  artist,
  artistType,
  songName,
  yearReleased,
  tag,
}) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={style.card}>
      <img className={style.cover} src={cover} alt="" />
      <div className={style.cardInfo}>
        <h1 className={style.artist}>{artist}</h1>
        <span className={style.artistType}>{artistType}</span>
        <h2 className={style.songName}>{songName}</h2>
        <h2 className={style.yearReleased}>({yearReleased})</h2>
        <div className={style.buttonContainer}>
          <span className={style.tag}>{tag}</span>
          <div className={style.heartContainer} onClick={handleLike}>
            {like ? (
              <GoHeartFill className={style.heartLiked} />
            ) : (
              <GoHeart className={style.heart} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
