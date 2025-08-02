import style from "./Pages.module.css";
import { ProductCard } from "../components/product/ProductCard";

export const ThirdDesign = () => {
  return (
    <>
      <div className={style.container}>
        <ProductCard />
      </div>
    </>
  );
};
