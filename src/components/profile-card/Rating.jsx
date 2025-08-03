import style from "./ProfileCard.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Rating = () => {
  return (
    <>
      <div className={style.ratingContainer}>
        <FaStar className={style.star} />
        <FaStar className={style.star} />
        <FaStar className={style.star} />
        <FaRegStar className={style.star} />
        <FaRegStar className={style.star} />
      </div>
    </>
  );
};
