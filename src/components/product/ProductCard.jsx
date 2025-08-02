import style from "./ProductCard.module.css";
import { ProductInfo } from "./ProductInfo";
import { ButtonContainer } from "./ButtonContainer";

export const ProductCard = () => {
  return (
    <>
      <div className={style.card}>
        <ProductInfo />
        <ButtonContainer />
      </div>
    </>
  );
};
