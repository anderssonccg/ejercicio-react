import style from "./ProductInfo.module.css";

export const ProductInfo = ({ img, name, seller, price, description }) => {
  img = "https://kbpackaging.com/wp-content/uploads/2023/09/Toilet-Roll.jpg";
  name = "SINGLE TOILET ROLL";
  seller = "POPULAR SELLER";
  price = "9.99";
  description =
    "This is a luxury, quilted, 3-ply, toilet roll with aloe vera for the smoothest wipe possible. No animals were harmed in the making or testing of this product. Due to high demand, limited to 2 per order.";
  return (
    <>
      <img className={style.image} src={img} alt="" />
      <h1 className={style.name}>{name}</h1>
      <h2 className={style.seller}>{seller}</h2>
      <h2 className={style.price}>{price}</h2>
      <p className={style.description}>{description}</p>
    </>
  );
};
