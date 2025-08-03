import style from "./Pages.module.css";
import { ProfileCard } from "../components/profile-card/ProfileCard";

export const SecondDesign = () => {
  return (
    <>
      <div className={style.container}>
        <ProfileCard />
      </div>
    </>
  );
};
