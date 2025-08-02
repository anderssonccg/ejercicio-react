import style from "./Button.module.css";

export const Button = ({ title }) => {
  return (
    <>
      <button className={style.button}>{title}</button>
    </>
  );
};
