import TgAuth from "@/features/TgAuth/TgAuth";
import styles from "./page.module.scss";
import LostPeopleMap from "@/features/LostPeopleMap/LostPeopleMap";
import NavBar from "@/features/NavBar/NavBar";

export default function Home() {

  const handleTelegramResponse = (response: any) => {
    console.log(response);
  };
  return (
    <main className={styles.main}>
      {/*<TgAuth/>*/}
      <NavBar/>
      <LostPeopleMap/>
    </main>
  );
}
