import style from "./NotFoundTitle.module.css";

export const NotFoundTitle = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Oops, la pagina que estas buscando es inexistente.
      </h1>
    </div>
  );
};
