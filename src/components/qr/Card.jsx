import style from "./Card.module.css";
import { CardDescription } from "./CardDescription";
import { CardTitle } from "./CardTitle";
import { QRImage } from "./QRImage";
export const Card = () => {
  return (
    <>
      <div className={style.card}>
        <QRImage />
        <CardTitle />
        <CardDescription />
      </div>
    </>
  );
};
