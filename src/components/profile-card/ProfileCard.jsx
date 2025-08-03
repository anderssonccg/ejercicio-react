import style from "./ProfileCard.module.css";
import { Rating } from "./Rating";
import { ButtonContainer } from "./ButtonContainer";

export const ProfileCard = () => {
  return (
    <>
      <div className={style.card}>
        <img
          className={style.image}
          src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
          alt=""
        />
        <h1 className={style.name}> Pablo Velasquez </h1>
        <Rating />
        <p className={style.description}>
          Global Shaper and Fullstack developer working at Zebra Technologies
          and Somos Networks. I love mentoring currently working on Make It
          Real.
        </p>
        <ButtonContainer />
      </div>
    </>
  );
};
