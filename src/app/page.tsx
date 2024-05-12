import LostPeopleMap from "@/features/LostPeopleMap/LostPeopleMap";
import NavBar from "@/features/NavBar/NavBar";
import FindPerson from "@/features/FindPerson/FindPerson";
import Footer from "@/features/Footer/Footer";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {/*<TgAuth/>*/}
        <NavBar/>
        <LostPeopleMap/>
        <FindPerson />
        <Footer/>
    </main>
  );
}
