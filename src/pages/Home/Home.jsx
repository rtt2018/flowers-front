import styles from "./Home.module.css";
import ShopList from "../../components/ShopList/ShopList";
import FloverList from "../../components/FloverList/FloverList";

export default function Home() {
  return (
    <div className={styles.container}>
      <ShopList />
      <FloverList />
    </div>
  );
}
