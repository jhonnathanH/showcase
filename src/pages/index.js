import Cards from "../components/cards/Cards";
import styles from "./index.module.css";

function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Cards/>
    </div>
  );
}

export default HomePage;