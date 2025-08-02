import style from "./QRImage.module.css";

export const QRImage = () => {
  return (
    <>
      <div className={style.container}>
        <img
          className={style.img}
          src="https://static.vecteezy.com/system/resources/previews/013/722/213/large_2x/sample-qr-code-icon-png.png"
          alt=""
        />
      </div>
    </>
  );
};
