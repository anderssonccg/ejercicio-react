import style from "./ProfileCard.module.css";

export const Button = ({ title, bgcolor, textColor }) => {
  return (
    <button
      className={style.button}
      style={{ backgroundColor: bgcolor, color: textColor }}
    >
      {title}
    </button>
  );
};
