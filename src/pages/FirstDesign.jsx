import style from "./Pages.module.css";
import { BadNewsSection } from "../components/bad-news/BadNewsSection";

export const FirstDesign = () => {
  return (
    <div className={style.container}>
      <BadNewsSection />
    </div>
  );
};
