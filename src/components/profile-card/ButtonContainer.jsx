import style from "./ProfileCard.module.css";
import { Button } from "./Button";

export const ButtonContainer = () => {
  return (
    <div className={style.buttonContainer}>
      <Button title="Read More" bgcolor="white" textColor="blueviolet" />
      <Button title="Contact" bgcolor="blueviolet" textColor="white" />
    </div>
  );
};
