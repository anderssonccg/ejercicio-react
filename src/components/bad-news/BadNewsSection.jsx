import style from "./BadNews.module.css";
import { BadNewsInfo } from "./BadNewsInfo";

export const BadNewsSection = () => {
  return (
    <>
      <h1 className={style.title}>404 NOT FOUND</h1>
      <section className={style.section}>
        <img
          className={style.image}
          src="https://img.freepik.com/free-vector/tech-error-404-icon_24911-115844.jpg"
          alt=""
        />
        <BadNewsInfo />
      </section>
    </>
  );
};
