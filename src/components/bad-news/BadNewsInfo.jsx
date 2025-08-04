import style from "./BadNews.module.css";
import { BackButton } from "./BackButton";

export const BadNewsInfo = () => {
  return (
    <>
      <div className={style.sectionContainer}>
        <h1 className={style.sectionTitle}>I have bad news for you</h1>
        <p className={style.description}>
          The page you are looking for might be removed or is temporarily
          unavaliable
        </p>
        <BackButton />
      </div>
    </>
  );
};
