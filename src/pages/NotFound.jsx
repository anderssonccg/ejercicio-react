import style from "./Pages.module.css";
import { NotFoundImage } from "../components/NotFoundImage";
import { NotFoundTitle } from "../components/NotFoundTitle";

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
