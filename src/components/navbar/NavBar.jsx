import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <Link className={style.link} to="/">
          First Design
        </Link>
        <Link className={style.link} to="/second-design">
          Second Design
        </Link>
        <Link className={style.link} to="/third-design">
          Third Design
        </Link>
        <Link className={style.link} to="/fourth-design">
          Fourth Design
        </Link>
      </nav>
    </>
  );
};
