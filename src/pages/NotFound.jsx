import style from "./Pages.module.css";
import { NotFoundImage } from "../components/not-found/NotFoundImage";
import { NotFoundTitle } from "../components/not-found/NotFoundTitle";

export const NotFound = () => {
  return (
    <>
      <div className={style.container}>
        <NotFoundImage />
        <NotFoundTitle />
      </div>
    </>
  );
};
