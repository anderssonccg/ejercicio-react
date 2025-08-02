import style from "./ButtonContainer.module.css";
import { Button } from "./Button";

export const ButtonContainer = () => {
  return (
    <>
      <div className={style.container}>
        <Button title={"LIKE"}></Button>
        <Button title={"ADD TO CART"}></Button>
      </div>
    </>
  );
};
