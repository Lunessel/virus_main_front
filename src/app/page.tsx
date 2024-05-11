import TgAuth from "@/app/features/TgAuth/TgAuth";
import styles from "./page.module.css";

export default function Home() {

  const handleTelegramResponse = (response: any) => {
    console.log(response);
  };
  return (
    <main className={styles.main}>
      <TgAuth/>
    </main>
  );
}
